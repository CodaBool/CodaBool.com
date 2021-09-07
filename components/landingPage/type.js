const SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

const createProgressFrames = (frameCount, progressCount, maxWidth, delay) => {
  const frames = []
  const step = Math.ceil(progressCount / frameCount)
  var currentSpinner = SPINNER[0]

  for (let i = 0; i < progressCount; i += step) {
    if (i / progressCount < .1) {
      currentSpinner = SPINNER[0]
    } else if (i / progressCount < .2) {
      currentSpinner = SPINNER[1]
    } else if (i / progressCount < .3) {
      currentSpinner = SPINNER[2]
    } else if (i / progressCount < .4) {
      currentSpinner = SPINNER[3]
    } else if (i / progressCount < .5) {
      currentSpinner = SPINNER[4]
    } else if (i / progressCount < .6) {
      currentSpinner = SPINNER[5]
    } else if (i / progressCount < .7) {
      currentSpinner = SPINNER[6]
    } else if (i / progressCount < .8) {
      currentSpinner = SPINNER[7]
    } else if (i / progressCount < .9) {
      currentSpinner = SPINNER[8]
    } else {
      currentSpinner = SPINNER[9]
    }

    const progressText = ` ${i}/${progressCount}`
    const filledLen = progressText.length + 2
    const intervalCount = maxWidth - filledLen

    const filledCount = Math.ceil((i / progressCount) * intervalCount)
    const unfilledCount = intervalCount - filledCount
    const frame = `[${'#'.repeat(filledCount)}${'-'.repeat(unfilledCount)}] ${progressText} ${currentSpinner}`

    frames.push({
      text: frame,
      delay
    })
  }
  return frames
}

function createSpinnerFrames(spinnerArr, text, repeats, delay) {
  const frames = []
  for (let i = 0; i < repeats; i++ ) {
    for (let j = 0; j < spinnerArr.length; j++ ) {
      frames.push({
        text: spinnerArr[j] + text,
        delay
      })
    }
  }
  return frames
}

export const progressBar = [
  {
    text: 'mkdir LandingPage',
    cmd: true,
    delay: 30
  },
  {
    text: 'cd LandingPage',
    cmd: true,
    delay: 30
  },
  {
    text: 'yarn init -y',
    cmd: true,
    delay: 30
  },
  {
    text: 'Wrote to /home/codabool/LandingPage/package.json:',
    cmd: false,
    delay: 30
  },
  {
    text: '',
    cmd: false,
  },
  {
    text: 'yarn add landing-page navigation-bar',
    cmd: true,
    delay: 30
  },
  {
    text: '[1/3] 🔍 Resolving packages...',
    cmd: false,
    frames: createProgressFrames(20, 200, 60, 10)
  },
  {
    text: '[2/3] 🚚 Fetching packages...',
    cmd: false,
    frames: createProgressFrames(60, 600, 60, 10)
  },
  {
    text: '[3/3] 🔗 Linking dependencies...',
    cmd: false,
    frames: createProgressFrames(40, 400, 60, 10)
  },
  {
    text: '+ ✨ landing-page navigation-bar 2 packages in 4.629s',
    cmd: false,
    delay: 80
  },
  {
    text: '',
    cmd: false,
  },
  {
    text: 'git init',
    cmd: true,
    delay: 80
  },
  {
    text: 'Initialized empty Git repository in /home/codabool/LandingPage/.git/',
    cmd: false,
    delay: 80
  },
  {
    text: 'cat > .gitignore',
    cmd: true,
    delay: 80
  },
  {
    text: 'node_modules/',
    cmd: false,
    delay: 80
  },
  {
    text: '',
    cmd: false,
  },
  {
    text: 'cat > README.md',
    cmd: true,
    delay: 80
  },
  {
    text: '# This is a landing page for portfolio website',
    cmd: false,
  },
  {
    text: '- 🗺️ here you can see my projects, blog, and how to contact me',
    cmd: false,
  },
  {
    text: '- 💻 I work in DevOps and on web development projects',
    cmd: false,
  },
  {
    text: '- 🎓 I have graduated with a bachelors degree in Computing Technology and Software Development',
    cmd: false,
  },
  {
    text: '- 🚲 Please take a look around and feel free to explore the site',
    cmd: false,
  },
  {
    text: '',
    cmd: false,
  },
  {
    text: 'git add .',
    cmd: true,
    delay: 80
  },
  {
    text: 'git commit -m "Begin Landing Page"',
    cmd: true,
    delay: 80
  },
  {
    text: '[master (root-commit) 9109ff4] Begin Landing Page',
    cmd: false,
  },
  {
    text: '4 files changed, 143 insertions(+)',
    cmd: false,
  },
  {
    text: ' ',
    cmd: false,
  },
  {
    text: 'yarn start',
    cmd: true,
    delay: 80
  },
  {
    text: 'ready - started server on http://localhost:3000',
    cmd: false,
  },
  {
    text: 'event - compiled successfully',
    cmd: false,
  }
]

export const spinner = [
  {
    text: '✔ Created Landing Page',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Creating Landing Page', 3, 120)
  },
  {
    text: '✔ Installed Navigation Bar',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Downloading Navigation Bar', 4, 100)
  },
  {
    text: '✔ Running server',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Finishing Landing Page', 9, 100)
  },
  {
    text: '✔ Loaded Browser Terminal',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Starting Browser Terminal', 1, 100)
  }
]

export const redirectSpinner = [ // 🚦💤✔️ 🗺️ 🖥️
  {
    text: '🗺️ Found Project',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Finding Project', 2, 100)
  },
  {
    text: '💤 Heroku Waking',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Waking Heroku', 5, 100)
  },
  {
    text: '🖥️ Server Ready',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Loading Project', 2, 100)
  },
  {
    text: '✔️ All Ready',
    cmd: false,
    frames: createSpinnerFrames(SPINNER, ' Redirecting', 1, 100)
  },
]

export const basic = [
  {
    text: 'ls',
    cmd: true
  },
  {
    text: 'index.js    package.json    node_modules'
  },
  {
    text: '',
    cmd: true
  }
]