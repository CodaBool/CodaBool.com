import useTitle from '@/lib/useTitle'

export default function Contact() {
  useTitle('Contact')
  return (
    <div className="container flex flex-wrap items-center mx-auto justify-evenly">
      <div className="my-10">
        <h1 className="text-6xl">Email. ✉️</h1>
        <h2 className="text-2xl">Business email</h2>
        <h2 className="text-2xl"><a href="mailto:proxy.htrwd@passmail.com" className="text-blue-400 hover:underline">proxy.htrwd@passmail.com</a></h2>
      </div>
    </div>
  )
}
