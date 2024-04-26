import Img from 'next/image'
// import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-1/2 my-8">
          <div className="mx-auto rounded-full about-img" style={{maxWidth: 300, maxHeight: 300, boxShadow: '0 0 1rem grey'}}>
            <Img className="rounded-full" alt="me" sizes="100vw" src="/codabool-lg.jpg" width={300} height={300} priority style={{ width: '100%', height: 'auto' }} placeholder="blur" blurDataURL="/codabool-lg.jpg" />
          </div>
        </div>
        <div className="w-full mb-8 md:w-1/2">
          <h1 className="m-2 ml-10 text-4xl">Hello, <div className="inline-block animate-bounce" >👋</div></h1>
          <p className="m-5 text-xl">&emsp;I am a DevOps engineer, but I also do full-stack development outside of work. I mainly work with <strong>AWS</strong> and for my full stack projects I enjoy Next.js which is a React framework that uses serverless technology for its backend. I like to use PostgreSQL + Prisma for my database solutions. But recently I've also been using Go for backend projects. You can see more on my projects and blog pages. Thanks for visiting. </p>
        </div>
      </div>
      <br/>
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full mb-8 md:w-1/2">
          <h1 className="m-2 ml-10 text-4xl">About me. 💻</h1>
          <p className="m-5 text-xl">&emsp;I graduated December of 2020. My Bachelor's is in Computing Technology and Software Development. I am pursuing my Master's degree in Computer Science at Georgia Tech Online. I put all my projects as public open source on github under <a href="https://github.com/CodaBool?tab=repositories" className="text-blue-900 no-underline">CodaBool</a>, so take a look. </p>
        </div>
        <div className="w-full md:w-1/2">
          <Img
            src="/posts/6/6.jpg"
            alt="group"
            className="rounded shadow-full"
            sizes="100vw"
            width={540}
            height={396}
            style={{ width: '100%', height: 'auto' }}
            priority
            placeholder="blur"
            blurDataURL="/posts/6/6.jpg"
          />
        </div>
      </div>
    </div>
  )
}