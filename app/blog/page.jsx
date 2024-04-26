import Img from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/util'

export default function Blog(props) {
  const blogs = getBlogPosts(true)

  return (
    <div className="mx-auto my-3 md:container">
      <h1 className="m-4 text-6xl font-light">Blog 📝</h1>
      <hr />
      <div className="flex flex-wrap justify-center mt-5">
        {blogs.map(blog => (
          <Card className="w-full mb-4 md:m-4 lg:w-[47%]" key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="">
              <CardHeader className="h-40">
                <CardTitle className="mb-2">{blog.metadata.title}</CardTitle>
                <CardDescription >&emsp;{blog.metadata.description} {blog.slug < blogs.length - 3 ? "lazy": "prio"}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* give priority loading to the top 4 */}
                {blog.slug < blogs.length - 3
                  ? <Img src={blog.metadata.cover} alt="project" width={634} height={317} quality={50} className="mx-auto rounded" />
                  : <Img src={blog.metadata.cover} alt="project" width={634} height={317} quality={50} className="mx-auto rounded" priority />
                }
              </CardContent>
              <CardFooter className="flex-wrap">
                {blog.metadata.tags && blog.metadata.tags.split(", ").map(tag => <Badge variant="secondary" key={tag}>{tag}</Badge>)}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}