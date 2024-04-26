import Link from 'next/link'

export default function navbar() {
  // https://preline.co/docs/navbar.html#with-collapse
  return (
    <header className="flex flex-wrap w-full py-4 text-sm bg-gray-800 dark:bg-white">
      <nav className="w-full px-4 mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href='/' className="text-xl font-semibold text-white">CodaBool</Link>
        </div>
        <div id="navbar-dark" className="">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link href='/blog' className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400">Blog</Link>
            <Link href='/projects' className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400">Projects</Link>
            <Link href='/about' className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400">About</Link>
            <Link href='/contact' className="font-medium text-gray-400 hover:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
