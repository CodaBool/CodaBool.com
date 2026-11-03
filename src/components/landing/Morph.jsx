/*
  Ascii Morph
  @author: Tim Holman (http://tholman.com)
  The MIT License (MIT)
  Copyright (c) 2016 Tim Holman
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// works best with max 50 x 50 chars
// Ideas
// Star wars / some Fandom, R2d2, bender, Gameboy, aperture science, Python, Space

const asciis = [
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ],
  [
    "  _____             _____            _             ",
    " |_   _| __ _   _  |_   _|   _ _ __ (_)_ __   __ _ ",
    "   | || '__| | | |   | || | | | '_ \\| | '_ \\ / _` |",
    "   | || |  | |_| |   | || |_| | |_) | | | | | (_| |",
    "   |_||_|   \\__, |   |_| \\__, | .__/|_|_| |_|\\__, |",
    "            |___/        |___/|_|            |___/ "
  ],
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ],
  [
    "  ____          _       ____              _ ",
    " / ___|___   __| | __ _| __ )  ___   ___ | |",
    "| |   / _ \\ / _` |/ _` |  _ \\ / _ \\ / _ \\| |",
    "| |__| (_) | (_| | (_| | |_) | (_) | (_) | |",
    " \\____\\___/ \\__,_|\\__,_|____/ \\___/ \\___/|_|"
  ],

[
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
],
[
  "$$$$$$$\\                       $$$$$$\\                      ",
  "$$  __$$\\                     $$  __$$\\                     ",
  "$$ |  $$ | $$$$$$\\ $$\\    $$\\ $$ /  $$ | $$$$$$\\   $$$$$$$\\ ",
  "$$ |  $$ |$$  __$$\\\\$$\\  $$  |$$ |  $$ |$$  __$$\\ $$  _____|",
  "$$ |  $$ |$$$$$$$$ |\\$$\\$$  / $$ |  $$ |$$ /  $$ |\\$$$$$$\\  ",
  "$$ |  $$ |$$   ____| \\$$$  /  $$ |  $$ |$$ |  $$ | \\____$$\\ ",
  "$$$$$$$  |\\$$$$$$$\\   \\$  /    $$$$$$  |$$$$$$$  |$$$$$$$  |",
  "\\_______/  \\_______|   \\_/     \\______/ $$  ____/ \\_______/ ",
  "                                        $$ |                ",
  "                                        $$ |                ",
  "                                        \\__|                "
],

[
"                             /",
"                            /",
"                           /;",
"                          //",
"                         ;/",
"                       ,//",
"                   _,-' ;_,,",
"                _,'-_  ;|,'",
"            _,-'_,..--. |",
"    ___   .'-'_)'  ) _)\\|      ___",
"  ,'\"\"\"`'' _  )   ) _)  ''--'''_,-'",
"-={-o-  /|    )  _)  ) ; '_,--''",
"  \\ -' ,`.  ) .)  _)_,''|",
"   `.\"(   `------''     /",
"     `.\\             _,'",
"       `-.____....-\\\\",
"                 || \\\\",
"                 // ||",
"                //  ||",
"            _-.//_ _||_,",
"              ,'  ,-'/"
],
[
  "     .--------.",
  "    / .------. \\",
  "   / /        \\ \\",
  "   | |        | |",
  "  _| |________| |_",
  ".' |_|        |_| '.",
  "'._____ ____ _____.'",
  "|     .'____'.     |",
  "'.__.'.'    '.'.__.'",
  "'.__  |      |  __.'",
  "|   '.'.____.'.'   |",
  "'.____'.____.'____.'",
  "'.________________.'",
  ],



[
"         ____",
"        o8%8888,",
"      o88%8888888.",
"     8'-    -:8888b",
"    8'         8888",
"   d8.-=. ,==-.:888b",
"   >8 `~` :`~' d8888",
"   88         ,88888",
"   88b. `-~  ':88888",
"   888b ~==~ .:88888",
"   88888o--:':::8888",
"   `88888| :::' 8888b",
"   8888^^'       8888b",
"  d888           ,%888b.",
" d88%            %%%8--'-.",
"/88:.__ ,       _%-' ---  -",
"    '''::===..-'   =  --.  `",
],
[
"                _ooOoo_",
"               o8888888o",
"               88\" . \"88",
"               (| -_- |)",
"               O\\  =  /O",
"            ____/\`---\'\\____",
"          .\'  \\\\|     |//  \`.",
"         /  \\\\|||  :  |||//  \\",
"        /  _||||| -:- |||||_  \\",
"        |   | \\\\\\  -  /'| |   |",
"        | \\_|  \`\\`---'//  |_/ |",
"        \\  .-\\__ \`-. -'__/-.  /",
"      ___\`. .'  /--.--\\  \`. .'___",
"   .\"\" '<  \`.___\\_<|>_/___.' _> \\\"\".",
"  | | :  \`- \\\`. ;\`. _/; .'/ /  .' ; |",
"  \\  \\ \`-.   \\_\\_\`. _.'_/_/  -' _.' /",
"===\`-.\`___\`-.__\\ \\___  /__.-'_.'_.-'===",
"                \`=--=-'    "
],

 [
"      _      _      _",
"   __(.)< __(.)> __(.)=",
"   \\___)  \\___)  \\___)  ",
"          _      _      _",
"       __(.)< __(.)> __(.)=",
"       \\___)  \\___)  \\___)   ",
"      _      _      _",
"   __(.)< __(.)> __(.)=",
"   \\___)  \\___)  \\___)   ",
"          _      _      _",
"       __(.)< __(.)> __(.)=",
"       \\___)  \\___)  \\___)  "
 ]
]

import { useRef, useEffect } from 'react'

const CANVAS = { x: 51, y: 28 }
const CRUSH_CHARS = '+*/\\'

function randomCrushChar() {
  return CRUSH_CHARS[Math.floor(Math.random() * CRUSH_CHARS.length)]
}

function replaceAt(string, index, character) {
  return string.slice(0, index) + character + string.slice(index + character.length)
}

// pads the art out to the canvas size so it renders centered
function squareOutData(art) {
  const width = Math.max(...art.map(line => line.length))
  const padding = {
    x: Math.max(0, Math.floor((CANVAS.x - width) / 2)),
    y: Math.floor((CANVAS.y - art.length) / 2),
  }
  const data = art.map(line => ' '.repeat(padding.x) + line.padEnd(width) + ' '.repeat(padding.x))

  for (let i = 0; i < CANVAS.y; i++) {
    if (i < padding.y) {
      data.unshift(' '.repeat(CANVAS.x))
    } else if (i > padding.y + art.length) {
      data.push(' '.repeat(CANVAS.x))
    }
  }
  return data
}

// crushes the outer characters of each line one step toward the vertical center
// returns false once there is nothing left to crush
function getMorphedFrame(data) {
  let found = false
  for (let i = 0; i < data.length; i++) {
    const start = data[i].search(/\S/)
    if (start === -1) continue
    const end = data[i].length - 1 - data[i].split('').reverse().join('').search(/\S/)
    crushLine(data, i, start, end)
    found = true
  }
  return found && data
}

function crushLine(data, line, start, end) {
  const centerY = Math.floor(CANVAS.y / 2)
  const direction = line > centerY ? -1 : 1
  const next = line + direction

  data[line] = replaceAt(data[line], start, ' ')
  data[line] = replaceAt(data[line], end, ' ')

  if (data[next] === undefined) return

  if (end - 1 !== start + 1 && start !== end && start + 1 !== end) {
    data[next] = replaceAt(data[next], start + 1, randomCrushChar())
    data[next] = replaceAt(data[next], end - 1, randomCrushChar())
  } else if ((start === end || start + 1 === end) && line + 1 !== centerY && line - 1 !== centerY && line !== centerY) {
    data[next] = replaceAt(data[next], start, randomCrushChar())
    data[next] = replaceAt(data[next], end, randomCrushChar())
  }
}

// frames that crush the current art away, followed by frames that build the next one
function prepareFrames(rendered, art) {
  const deconstruction = []
  const construction = []

  // if its taking more than 100 frames, its probably somehow broken
  let current = rendered.slice()
  for (let i = 0; i < 100; i++) {
    const frame = getMorphedFrame(current)
    if (!frame) break
    deconstruction.push(frame.slice())
  }

  current = squareOutData(art)
  construction.unshift(current.slice())
  for (let i = 0; i < 100; i++) {
    const frame = getMorphedFrame(current)
    if (!frame) break
    construction.unshift(frame.slice())
  }

  return deconstruction.concat(construction)
}

export default function Morph() {
  const canvas = useRef(null)

  useEffect(() => {
    let rendered = []
    let frames = []
    let frameTimer = null

    function draw(data) {
      canvas.current.textContent = data.join('\n')
      rendered = data
    }

    function animate() {
      frameTimer = setTimeout(() => {
        draw(frames.shift())
        if (frames.length > 0) animate()
      }, 20)
    }

    function morph(art) {
      clearTimeout(frameTimer)
      frames = prepareFrames(rendered, art)
      animate()
    }

    draw(squareOutData(asciis[0]))
    let currentIndex = 2
    const firstTimer = setTimeout(() => morph(asciis[1]), 1000)
    const loop = setInterval(() => {
      morph(asciis[currentIndex])
      currentIndex = (currentIndex + 1) % asciis.length
    }, 3000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(loop)
      clearTimeout(frameTimer)
    }
  }, [])

  return (
    <div className="morph-container">
      <pre className="morph-section" ref={canvas}></pre>
    </div>
  )
}
