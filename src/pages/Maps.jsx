import useTitle from '@/lib/useTitle'

export default function Maps() {
  useTitle('Maps in Cyberspace', 'redirect back to maps in cyberspace')
  return (
    <div className="px-10 mt-40 text-center text-white sm:text-2xl">
      <h1 className="my-5 text-3xl">🗺️ Instructions are back at itch.io</h1>
      <h4 className="my-5">itch.io requires that download button, which does nothing. This page is just to get you back on track.</h4>
      <h4 className="my-5">You'll want to go back to whatever page opened this and follow the instructions on that page.</h4>
      <h4 style={{ marginBottom: "10em" }}>If you run into any issues you can <a href="mailto:proxy.htrwd@passmail.com" className="text-blue-300">email me</a> or message me from the Foundry Discord at <span className="text-blue-400">CodaBool</span></h4>
      <h4 className="mb-3 text-center text-gray-400">Enjoy Maps in Cyberspace ❤️</h4>
    </div>
  )
}
