import { useEffect, useState } from 'react'

var timer = null

export default function DisplayTime() {
  const [clock, setClock] = useState(genTime)
  const [emo, setEmo] = useState(genEmoji)

  useEffect(() => {

    timer = setInterval(() => {
      setClock(genTime)
      setEmo(genEmoji)
    }, 1000)
  }, [])
  function genTime() {
    var time, minutes, hour, seconds = null
    const now = new Date()
    hour = now.getHours()
    minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
    seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()
    time = hour + ":" + minutes + ":" + seconds
    return time
  }
  
  function genEmoji() {
    var emoji = null
    const now = new Date()
    const hour = now.getHours()
    if (hour <= 3) emoji = "🌑"
    if (hour > 3 & hour <= 6) emoji = "🌗"
    if (hour > 6 & hour <= 9) emoji = "🌅"
    if (hour > 9 & hour <= 12) emoji = "⛅"
    if (hour > 12 & hour <= 15) emoji = "☀️"
    if (hour > 15 & hour <= 18) emoji = "🌤️"
    if (hour > 18 & hour <= 21) emoji = "🌄"
    if (hour > 21 & hour <= 24) emoji = "🌙"
    return emoji
  }

  return(
    <div className="d-flex">
      <span style={{width: '10rem', lineHeight: '1.4rem'}}>{clock}</span>
      <span>{emo}</span>
    </div>
  )
}