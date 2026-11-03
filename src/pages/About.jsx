import useTitle from '@/lib/useTitle'

export default function About() {
  useTitle('About')
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-1/2 mb-8">
          <div className="mx-auto rounded-full about-img" style={{ maxWidth: 300, maxHeight: 300, boxShadow: '0 0 1rem black' }}>
            <img className="rounded-full" alt="me" src="/codabool-lg.jpg" width={300} height={300} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
        <div className="w-full mb-8 md:w-1/2">
          <h1 className="m-2 ml-10 text-4xl">Hello, <div className="inline-block animate-bounce" >👋</div></h1>
          <p className="m-5 text-xl">&emsp;I am a DevOps engineer, but I also do web and game development outside of work. I mainly work with <strong>AWS</strong>. I like to use PostgreSQL + Prisma for my database solutions. I publish all my work onto <a href="https://github.com/CodaBool?tab=repositories" className="text-blue-400 no-underline">Github</a>. You can see more on my projects and blog pages. <b style={{ fontWeight: 550 }}>Thanks for visiting</b>. </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full mb-8 md:w-1/2">
          <h1 className="m-2 ml-10 text-4xl">About me. 💻</h1>
          <p className="m-5 text-xl">&emsp;I graduated December of 2020. My Bachelor's is in Computing Technology and Software Development. I am pursuing my Master's degree in Computer Science at Georgia Tech Online. I've contributed to a few FOSS projects, and I'm a big Linux fan. </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/posts/6/6.jpg"
            alt="group"
            className="rounded shadow-full"
            width={540}
            height={396}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
