import { Link } from 'react-router'
import useTitle from '@/lib/useTitle'

export default function NotFound() {
  useTitle('Not Found')
  return (
    <div className="container mx-auto my-20 text-center">
      <h1 className="text-6xl font-light">404</h1>
      <p className="mt-4 text-2xl text-gray-400">This page could not be found.</p>
      <Link to="/blog" className="inline-block mt-6 text-blue-400 hover:underline">Back to the blog</Link>
    </div>
  )
}
