import Img from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="container px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-wrap mt-12">
        <div className="w-full mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
          <hr />
          <p className="mt-2 text-sm text-center text-gray-600">
            DevOps Engineer and Full-stack Dev. I run this as a personal blog and hub for my projects.
          </p>
          <Link href="mailto:contact@codabool.com" className="text-blue-500 hover:underline">
            <p className="text-center">
              contact@codabool.com
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center my-2">
        <Link href="https://github.com/codabool" className="mr-3">
          <Img
            src="/logos/git-logo.jpg"
            alt="github"
            className="rounded-full"
            width={60}
            height={60}
            priority
          />
        </Link>
        <Link href="https://twitter.com/coda_bool" className="mr-3">
          <Img
            src="/logos/twitter-logo.jpg"
            alt="twitter"
            className="rounded-full"
            width={60}
            height={60}
            priority
          />
        </Link>
      </div>
    </footer>
  )
}
