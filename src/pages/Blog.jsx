import { Link } from 'react-router'
import { Rss } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts } from '@/lib/posts'
import useTitle from '@/lib/useTitle'

export default function Blog() {
  useTitle('Blog')

  return (
    <div className="mx-auto my-3 md:container">
      <div className="flex items-center justify-between m-4">
        <h1 className="text-6xl font-light">Blog 📝</h1>
        <a href="/rss.xml" className="text-indigo-400 hover:text-indigo-300" aria-label="RSS feed">
          <Rss size={32} />
        </a>
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        {posts.map((metadata, i) => (
          <Card className="w-full mb-4 md:m-4 lg:w-[47%] mr-1" key={metadata.id}>
            <Link to={`/blog/${metadata.id}`}>
              <CardHeader>
                <CardTitle>{metadata.title}</CardTitle>
                <CardDescription>&emsp;{metadata.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* give priority loading to the top 4 */}
                <img src={metadata.cover} alt="project" width={634} height={317} className="mx-auto rounded" loading={i < 4 ? 'eager' : 'lazy'} />
              </CardContent>
              <CardFooter className="flex-wrap">
                {metadata.tags && metadata.tags.split(", ").map(tag => <Badge variant="secondary" key={tag}>{tag}</Badge>)}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
