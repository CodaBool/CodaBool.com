import Form from 'next/form'
import { Rss, MailCheck } from 'lucide-react'
import Link from 'next/link'
import { addToNewsLetter } from '@/app/(main)/blog/actions';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default async function NewsLetter({ param }) {
  if (param.sub) {
    return (
      <div className="flex justify-center text-blue-500 text-2xl">
        <MailCheck className='mt-1 me-4' />
        <p> Thank you for subscribing!</p>
      </div>
    )
  }

  return (
    <form className="container" action={addToNewsLetter}>
      <label htmlFor="email" className="text-sm font-medium text-gray-700 ms-1">Signup for the newsletter</label>
      <div className="flex space-x-4">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder='newsletter@email.com'
          required
          className="block w-full px-3 mt-1 border rounded-md shadow-sm sm:text-sm"
        />
        <Button variant="outline" type="submit" className="mt-1">Sign Up</Button>

        <Link href="/rss.xml" className="text-indigo-900 hover:text-indigo-400 mt-3">
          <Rss />
        </Link>
      </div>
      {param.err && <p className="text-red-500 text-sm m-2">{param.err}</p>}
    </form>
  )
}
