export default function Contact() {
  return (
    <div className="container flex flex-wrap items-center mx-auto justify-evenly">
      <div className="my-10">
        <h1 className="text-6xl">Email. ✉️</h1>
        <h2 className="text-2xl">Business email</h2>
        <h2 className="text-2xl"><a href="mailto:contact@codabool.com" className="text-blue-500 hover:underline">contact@codabool.com</a></h2>
      </div>
      <div className="my-10">
        <h1 className="text-5xl">Connect. 🐦</h1>
        <h2 className="text-2xl">You can follow me on X</h2>
        <h2 className="text-2xl"><a href="https://x.com/coda_bool" className="text-blue-500 hover:underline">@Coda_Bool</a></h2>
      </div>
    </div>
  )
}
