import { useEffect, useState } from 'react'

export default function DisplayTime() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return (
    <div className="flex">
      <span className="w-40 leading-[1.4rem]">{now.getHours()}:{minutes}:{seconds}</span>
      <span>{emoji(now.getHours())}</span>
    </div>
  )
}

function emoji(hour) {
  if (hour <= 3) return '🌑'
  if (hour <= 6) return '🌗'
  if (hour <= 9) return '🌅'
  if (hour <= 12) return '⛅'
  if (hour <= 15) return '☀️'
  if (hour <= 18) return '🌤️'
  if (hour <= 21) return '🌄'
  return '🌙'
}
