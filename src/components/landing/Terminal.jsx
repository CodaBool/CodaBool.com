import { useEffect, useRef, useState } from 'react'
import Vi from './Vi'
import { SPINNER } from './script'

const README = `# This is a landing page for portfolio website
- 🗺️ here you can see my projects, blog, and how to contact me
- 💻 I work in DevOps and on web development projects
- 🎓 I have graduated with a bachelors degree in Computing Technology and Software Development
- 🚲 Please take a look around and feel free to explore the site`

const dir = (children = {}) => ({ type: 'dir', children })
const file = (content = '') => ({ type: 'file', content })

function tokenize(line) {
  const tokens = []
  let value = '', quote = '', started = false
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '\\' && i + 1 < line.length && quote !== "'") { value += line[++i]; started = true }
    else if (quote) { if (char === quote) quote = ''; else value += char }
    else if (char === '"' || char === "'") { quote = char; started = true }
    else if (/\s/.test(char)) { if (started) { tokens.push({ value }); value = ''; started = false } }
    else if (char === '>' || char === '<') {
      if (started) { tokens.push({ value }); value = ''; started = false }
      tokens.push({ value: char === '>' && line[i + 1] === '>' ? (i++, '>>') : char, operator: true })
    } else { value += char; started = true }
  }
  if (quote) throw 'shell: unmatched quote'
  if (started) tokens.push({ value })
  return tokens
}

// pass loading as { text, duration } to swap the prompt for a progress bar, typing is blocked until it clears
export default function Terminal({ msg, commands: extraCommands = {}, notFound, loading }) {
  const [lines, setLines] = useState(msg ? [msg] : [])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [editor, setEditor] = useState(null)
  const fs = useRef(dir({
    'readme.md': file(README),
    etc: dir({ 'os-release': file('arch btw') }),
  }))
  const cwd = useRef([])
  const scroller = useRef(null)
  const inputRef = useRef(null)
  const draft = useRef('')

  useEffect(() => {
    if (!editor) inputRef.current?.focus({ preventScroll: true })
  }, [editor])

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight
  }, [lines])

  function resolve(path = '') {
    const parts = path.startsWith('/') || path.startsWith('~') ? [] : cwd.current.slice()
    for (const part of path.split('/')) {
      if (part === '' || part === '.') continue
      if (part === '~') parts.length = 0
      else if (part === '..') parts.pop()
      else parts.push(part)
    }
    return parts
  }

  function lookup(parts) {
    let node = fs.current
    for (const part of parts) {
      if (node?.type !== 'dir') return null
      node = node.children[part]
    }
    return node ?? null
  }

  // returns the parent directory and name for a path, or throws a printable error
  function parentOf(path) {
    const parts = resolve(path)
    const name = parts.pop()
    const parent = lookup(parts)
    if (!name) throw `${path}: invalid path`
    if (parent?.type !== 'dir') throw `${path}: no such file or directory`
    return [parent, name]
  }

  function writeFile(path, content, append) {
    const [parent, name] = parentOf(path)
    const existing = parent.children[name]
    if (existing?.type === 'dir') throw `${path}: is a directory`
    parent.children[name] = file(append && existing ? `${existing.content}${content}` : content)
  }

  const builtins = {
    show: {
      description: 'show the welcome message',
      run: () => msg || '',
    },
    help: {
      description: 'list all the commands',
      run: () => Object.entries(commands)
        .filter(([, command]) => command.description)
        .map(([name, command]) => `${name} - ${command.description}`),
    },
    clear: {
      description: 'clear the screen',
      run: () => setLines([]),
    },
    echo: {
      description: 'print text, use > or >> to write it to a file',
      run: args => args.join(' ') + '\n',
    },
    pwd: {
      description: 'print the current directory',
      run: () => '/' + cwd.current.join('/') + '\n',
    },
    ls: {
      description: 'list a directory',
      run: args => {
        const flags = args.filter(arg => arg.startsWith('-')).join('')
        const paths = args.filter(arg => !arg.startsWith('-'))
        const targets = paths.length ? paths : ['.']
        return targets.map(path => {
          const node = lookup(resolve(path))
          if (!node) throw `ls: ${path}: no such file or directory`
          if (node.type === 'file') return path
          const names = Object.keys(node.children).filter(name => flags.includes('a') || !name.startsWith('.')).sort()
          if (flags.includes('a')) names.unshift('.', '..')
          const entries = names.map(name => {
            const child = node.children[name]
            if (flags.includes('l')) return `${child?.type === 'dir' || name === '.' || name === '..' ? 'd' : '-'}rw-r--r--  1 guest guest ${String(child?.content?.length ?? 0).padStart(5)} ${name}`
            return child?.type === 'dir' ? name + '/' : name
          })
          return (targets.length > 1 ? `${path}:\n` : '') + entries.join(flags.includes('l') ? '\n' : '  ')
        })
      },
    },
    cd: {
      description: 'change directory',
      run: ([path = '~']) => {
        const parts = resolve(path)
        const node = lookup(parts)
        if (!node) throw `cd: ${path}: no such file or directory`
        if (node.type !== 'dir') throw `cd: ${path}: not a directory`
        cwd.current = parts
      },
    },
    mkdir: {
      description: 'make a directory',
      run: args => {
        const parents = args.includes('-p')
        const paths = args.filter(arg => arg !== '-p')
        if (!paths.length) throw 'mkdir: missing operand'
        for (const path of paths) {
          if (parents) {
            let node = fs.current
            for (const part of resolve(path)) {
              if (!node.children[part]) node.children[part] = dir()
              node = node.children[part]
              if (node.type !== 'dir') throw `mkdir: ${path}: not a directory`
            }
          } else {
            const [parent, name] = parentOf(path)
            if (parent.children[name]) throw `mkdir: ${path}: file exists`
            parent.children[name] = dir()
          }
        }
      },
    },
    touch: {
      description: 'create an empty file',
      run: args => {
        if (!args.length) throw 'touch: missing operand'
        for (const path of args) {
          const [parent, name] = parentOf(path)
          parent.children[name] ??= file()
        }
      },
    },
    cat: {
      description: 'print a file',
      run: args => {
        if (!args.length) throw 'cat: missing file operand'
        return args.map(path => {
          const node = lookup(resolve(path))
          if (!node) throw `cat: ${path}: no such file or directory`
          if (node.type === 'dir') throw `cat: ${path}: is a directory`
          return node.content
        }).join('')
      },
    },
    rm: {
      description: 'remove a file, -r for directories',
      run: args => {
        const flags = args.filter(arg => /^-[rf]+$/.test(arg)).join('')
        const paths = args.filter(arg => !/^-[rf]+$/.test(arg))
        if (!paths.length) throw 'rm: missing operand'
        for (const path of paths) {
          const [parent, name] = parentOf(path)
          const node = parent.children[name]
          if (!node) { if (!flags.includes('f')) throw `rm: ${path}: no such file or directory`; continue }
          if (node.type === 'dir' && !flags.includes('r')) throw `rm: ${path}: is a directory`
          if (node.type === 'dir' && resolve(path).join('/') === cwd.current.join('/')) throw `rm: ${path}: current directory`
          delete parent.children[name]
        }
      },
    },
    vi: {
      description: 'edit a file',
      run: ([path]) => {
        if (!path) throw 'vi: missing file name'
        const node = lookup(resolve(path))
        if (node?.type === 'dir') throw `vi: ${path}: is a directory`
        parentOf(path)
        setEditor({ path, text: node?.content ?? '', saved: node?.content ?? '' })
      },
    },
  }
  const commands = { ...builtins, vim: builtins.vi, ...extraCommands }

  function print(...output) {
    const values = output.flat().filter(value => value !== undefined && value !== '')
    if (values.length) setLines(prev => [...prev, ...values.map(String)])
  }

  function submit() {
    const text = input
    print(`$ ${input}`)
    setInput('')
    if (!text.trim()) return
    setHistory(prev => [...prev, text])
    setHistoryIndex(history.length + 1)
    draft.current = ''

    try {
      const tokens = tokenize(text)
      const redirectIndex = tokens.findIndex(token => token.operator && (token.value === '>' || token.value === '>>'))
      const redirect = redirectIndex >= 0 ? tokens[redirectIndex].value : null
      const target = redirect ? tokens[redirectIndex + 1]?.value : null
      if (redirect && (!target || tokens.length > redirectIndex + 2)) throw 'shell: invalid redirect'
      const [name, ...args] = (redirect ? tokens.slice(0, redirectIndex) : tokens).map(token => token.value)
      const command = commands[name]
      if (!command) { print(notFound ? notFound(name) : `${name}: command not found`); return }
      const output = command.run(args, print)
      if (redirect) writeFile(target, output === undefined ? '' : Array.isArray(output) ? output.join('\n') : String(output), redirect === '>>')
      else if (output !== undefined) print(output)
    } catch (error) {
      print(String(error))
    }
  }

  function autocomplete() {
    const parts = input.split(' ')
    const last = parts.pop()
    let options
    if (parts.length === 0) {
      options = Object.keys(commands).filter(name => name.startsWith(last))
    } else {
      const slash = last.lastIndexOf('/') + 1
      const node = lookup(resolve(last.slice(0, slash)))
      if (node?.type !== 'dir') return
      options = Object.entries(node.children)
        .filter(([name]) => name.startsWith(last.slice(slash)))
        .map(([name, child]) => last.slice(0, slash) + name + (child.type === 'dir' ? '/' : ''))
    }
    if (options.length === 1) {
      setInput([...parts, options[0]].join(' '))
    } else if (options.length > 1) {
      print(`$ ${input}`, options.join('  '))
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      // otherwise the newline lands in the vi textarea when this command opens it
      e.preventDefault()
      submit()
    } else if (e.key === 'Tab') {
      e.preventDefault()
      autocomplete()
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault()
      print(`$ ${input}^C`)
      setInput('')
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === history.length) draft.current = input
      const index = Math.min(Math.max(historyIndex + (e.key === 'ArrowUp' ? -1 : 1), 0), history.length)
      setHistoryIndex(index)
      setInput(history[index] ?? draft.current)
    }
  }

  if (editor) {
    return <Vi path={editor.path} initialText={editor.text} writeFile={writeFile} onExit={() => setEditor(null)} />
  }

  return (
    <div
      ref={scroller}
      className="landing-terminal"
      onClick={() => window.getSelection().isCollapsed && inputRef.current?.focus()}
    >
      {lines.map((line, i) => (
        <pre key={i}>{line || ' '}</pre>
      ))}
      {loading
        ? <Loader {...loading} />
        : (
          <div className="landing-prompt">
            <span>$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="terminal input"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        )
      }
    </div>
  )
}

const BAR_WIDTH = 30

function Loader({ text, duration }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const timer = setInterval(() => setElapsed(performance.now() - start), 80)
    return () => clearInterval(timer)
  }, [])

  const filled = Math.min(BAR_WIDTH, Math.round((elapsed / duration) * BAR_WIDTH))
  const spinner = SPINNER[Math.floor(elapsed / 80) % SPINNER.length]

  return (
    <pre role="status">
      {spinner} {text}{'\n'}[{'#'.repeat(filled)}{'-'.repeat(BAR_WIDTH - filled)}]
    </pre>
  )
}
