import { useEffect, useState } from 'react'

// plays a scripted terminal session, see ./script.js for the line format
// commands are typed out a character at a time, output lines can animate through frames
export default function LineWriter({ lines, interval }) {
  const [buffer, setBuffer] = useState([])

  useEffect(() => {
    const output = []
    let timer = null
    // clearing the timer on unmount leaves the pending promise unresolved, which ends the run
    const wait = ms => new Promise(resolve => { timer = setTimeout(resolve, ms) })
    const show = (index, line) => {
      output[index] = line
      setBuffer(output.slice())
    }

    async function run() {
      for (const [i, line] of lines.entries()) {
        if (line.cmd) {
          for (let pos = 0; pos <= line.text.length; pos++) {
            show(i, { cmd: true, text: line.text.slice(0, pos) })
            await wait(line.delay ?? interval)
          }
        } else if (line.frames) {
          for (const frame of line.frames) {
            show(i, { text: frame.text })
            await wait(frame.delay ?? interval)
          }
          show(i, { text: line.text || line.frames.at(-1).text })
          await wait(interval)
        } else {
          show(i, { text: line.text })
          await wait(interval)
        }
      }
    }

    run()
    return () => clearTimeout(timer)
  }, [lines, interval])

  return (
    <div>
      {buffer.map((line, i) => (
        <div key={i} className="min-h-[1.5em]">
          {line.cmd && '$ '}{line.text}
        </div>
      ))}
    </div>
  )
}
