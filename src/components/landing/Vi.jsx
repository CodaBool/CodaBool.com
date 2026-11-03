import { useEffect, useRef, useState } from 'react'

const clamp = (value, low, high) => Math.max(low, Math.min(value, high))

export default function Vi({ path, initialText, writeFile, onExit }) {
  const [text, setText] = useState(initialText)
  const [saved, setSaved] = useState(initialText)
  const [mode, setMode] = useState('NORMAL')
  const [command, setCommand] = useState('')
  const [message, setMessage] = useState('')
  const [cursor, setCursor] = useState(0)
  const [pending, setPending] = useState('')
  const [register, setRegister] = useState('')
  const [undo, setUndo] = useState([])
  const [redo, setRedo] = useState([])
  const area = useRef(null)
  const commandInput = useRef(null)
  const preferredColumn = useRef(null)

  useEffect(() => {
    if (mode === 'COMMAND' || mode === 'SEARCH') commandInput.current?.focus()
    else area.current?.focus()
  }, [mode])

  useEffect(() => {
    if (mode === 'NORMAL' && area.current) area.current.setSelectionRange(cursor, cursor)
  }, [cursor, text, mode])

  function change(next, nextCursor) {
    if (next !== text) {
      setUndo(stack => [...stack.slice(-99), { text, cursor }])
      setRedo([])
      setText(next)
    }
    setCursor(clamp(nextCursor, 0, Math.max(0, next.length - (mode === 'NORMAL' ? 1 : 0))))
    setMessage('')
  }

  function lineStart(pos = cursor) { return text.lastIndexOf('\n', Math.max(0, pos - 1)) + 1 }
  function lineEnd(pos = cursor) { const end = text.indexOf('\n', pos); return end < 0 ? text.length : end }
  function normalCursor(pos) { return clamp(pos, 0, text.length) }
  function vertical(direction) {
    const start = lineStart()
    const column = preferredColumn.current ?? cursor - start
    preferredColumn.current = column
    const nextStart = direction < 0 ? lineStart(Math.max(0, start - 1)) : Math.min(text.length, lineEnd() + 1)
    if (nextStart === start) return
    const nextEnd = lineEnd(nextStart)
    setCursor(normalCursor(nextStart + Math.min(column, Math.max(0, nextEnd - nextStart - 1))))
  }
  function move(pos) { preferredColumn.current = null; setCursor(normalCursor(pos)) }
  function write() {
    try { writeFile(path, text); setSaved(text); setMessage(`"${path}" ${text.split('\n').length}L written`); return true }
    catch (error) { setMessage(String(error)); return false }
  }
  function runCommand() {
    const value = command.trim()
    setCommand('')
    setMode('NORMAL')
    if (value === 'w' || value === 'write') write()
    else if (value === 'q' || value === 'quit') {
      if (text !== saved) setMessage('E37: No write since last change (add ! to override)')
      else onExit()
    } else if (value === 'q!' || value === 'quit!') onExit()
    else if (['wq', 'x', 'wq!', 'xit'].includes(value)) { if (write()) onExit() }
    else if (/^\d+$/.test(value)) move(lineStartOfNumber(Number(value)))
    else setMessage(`E492: Not an editor command: ${value}`)
  }
  function lineStartOfNumber(number) {
    let index = 0
    for (let i = 1; i < number && index < text.length; i++) {
      const next = text.indexOf('\n', index)
      if (next < 0) break
      index = next + 1
    }
    return index
  }
  function nextWord(pos, backwards = false) {
    if (backwards) {
      const prefix = text.slice(0, pos).replace(/\W+$/, '')
      const match = prefix.match(/\w+$/)
      return match ? prefix.length - match[0].length : 0
    }
    const match = text.slice(pos + 1).match(/\b\w/)
    return match ? pos + 1 + match.index : text.length - 1
  }
  function onKeyDown(e) {
    if (mode === 'INSERT') {
      if (e.key === 'Escape' || (e.ctrlKey && e.key === '[')) {
        e.preventDefault()
        const at = area.current.selectionStart
        setMode('NORMAL')
        setCursor(normalCursor(at > 0 && text[at - 1] !== '\n' ? at - 1 : at))
      }
      return
    }
    if (mode !== 'NORMAL') return
    if (e.metaKey || (e.ctrlKey && !['r', '['].includes(e.key))) return
    e.preventDefault()
    const key = e.key
    if (pending === 'g') { setPending(''); if (key === 'g') move(0); return }
    if (pending === 'd' || pending === 'y') {
      setPending('')
      if (key === pending) {
        const start = lineStart(), end = Math.min(text.length, lineEnd() + 1)
        setRegister(text.slice(start, end).replace(/\n?$/, '\n'))
        if (pending === 'd') {
          const from = end === text.length && start > 0 && (start === end || text[end - 1] !== '\n') ? start - 1 : start
          change(text.slice(0, from) + text.slice(end), from)
        }
      }
      return
    }
    if (key === ':' || key === '/') { setCommand(''); setMode(key === ':' ? 'COMMAND' : 'SEARCH'); return }
    if (key === 'Escape') { setPending(''); return }
    if (key === 'h' || key === 'ArrowLeft') move(cursor - 1)
    else if (key === 'l' || key === 'ArrowRight') move(Math.min(cursor + 1, Math.max(lineStart(), lineEnd() - 1)))
    else if (key === 'j' || key === 'ArrowDown') vertical(1)
    else if (key === 'k' || key === 'ArrowUp') vertical(-1)
    else if (key === '0' || key === 'Home') move(lineStart())
    else if (key === '$' || key === 'End') move(Math.max(lineStart(), lineEnd() - 1))
    else if (key === 'w') move(nextWord(cursor))
    else if (key === 'b') move(nextWord(cursor, true))
    else if (key === 'g' || key === 'd' || key === 'y') setPending(key)
    else if (key === 'G') move(lineStartOfNumber(text.split('\n').length))
    else if (key === 'i' || key === 'I' || key === 'a' || key === 'A') {
      const at = key === 'I' ? lineStart() : key === 'A' ? lineEnd() : key === 'a' ? Math.min(cursor + 1, text.length) : cursor
      setMode('INSERT'); requestAnimationFrame(() => area.current?.setSelectionRange(at, at))
    } else if (key === 'o' || key === 'O') {
      const at = key === 'o' ? lineEnd() : lineStart()
      const next = text.slice(0, at) + '\n' + text.slice(at)
      change(next, at + (key === 'o' ? 1 : 0)); setMode('INSERT')
      requestAnimationFrame(() => area.current?.setSelectionRange(at + (key === 'o' ? 1 : 0), at + (key === 'o' ? 1 : 0)))
    } else if (key === 'x' || key === 'Delete') {
      if (cursor < lineEnd()) change(text.slice(0, cursor) + text.slice(cursor + 1), cursor)
    } else if (key === 'p' && register) {
      const linewise = register.endsWith('\n')
      const at = linewise ? Math.min(text.length, lineEnd() + 1) : Math.min(text.length, cursor + 1)
      const insertion = linewise && at === text.length && text[at - 1] !== '\n' ? '\n' + register.slice(0, -1) : register
      change(text.slice(0, at) + insertion + text.slice(at), at + (insertion.startsWith('\n') ? 1 : 0))
    } else if (key === 'u' && undo.length) {
      const previous = undo.at(-1); setUndo(undo.slice(0, -1)); setRedo([...redo, { text, cursor }]); setText(previous.text); setCursor(previous.cursor)
    } else if (e.ctrlKey && key === 'r' && redo.length) {
      const next = redo.at(-1); setRedo(redo.slice(0, -1)); setUndo([...undo, { text, cursor }]); setText(next.text); setCursor(next.cursor)
    }
  }
  function onCommandKey(e) {
    e.stopPropagation()
    if (e.key === 'Escape') { e.preventDefault(); setMode('NORMAL'); setCommand('') }
    else if (e.key === 'Enter') {
      e.preventDefault()
      if (mode === 'COMMAND') runCommand()
      else {
        const found = text.indexOf(command, cursor + 1)
        const wrapped = found < 0 ? text.indexOf(command) : found
        if (command && wrapped >= 0) move(wrapped)
        else setMessage(`Pattern not found: ${command}`)
        setMode('NORMAL'); setCommand('')
      }
    }
  }
  const row = text.slice(0, cursor).split('\n').length
  const col = cursor - lineStart() + 1
  return <div className="landing-terminal landing-vi">
    <div className="landing-vi-buffer">
      <textarea ref={area} aria-label="Vim editor" value={text} onClick={e => { if (mode === 'NORMAL') setCursor(e.currentTarget.selectionStart) }} onChange={e => {
        if (mode !== 'INSERT') return
        const next = e.target.value, at = e.target.selectionStart
        change(next, at)
      }} onKeyDown={onKeyDown} spellCheck={false} autoCapitalize="off" autoComplete="off" />
    </div>
    <div className="landing-vi-status"><span>"{path}" {text !== saved ? '[+] ' : ''} {mode === 'INSERT' ? '-- INSERT --' : ''}</span><span>{row},{col}</span></div>
    {mode === 'COMMAND' || mode === 'SEARCH' ? <div className="landing-vi-command"><span>{mode === 'COMMAND' ? ':' : '/'}</span><input ref={commandInput} aria-label="Vim command" value={command} onChange={e => setCommand(e.target.value)} onKeyDown={onCommandKey} /></div> : <div className="landing-vi-message">{message || (pending ? pending : 'i insert · Esc normal · :w save · :q quit · :wq save and quit')}</div>}
  </div>
}
