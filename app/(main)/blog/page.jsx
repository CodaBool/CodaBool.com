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
import NewsLetter from "@/components/ui/newsletter"
import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/(main)/blog/util'

export default async function Blog({ searchParams }) {
  const blogs = getBlogPosts(true)
  const param = await searchParams

  return (
    <div className="mx-auto my-3 md:container">
      <h1 className="m-4 text-6xl font-light">Blog 📝</h1>
      <NewsLetter param={param} />
      {/* <hr /> */}
      <div className="flex flex-wrap justify-center mt-5">
        {blogs.map(blog => (
          <Card className="w-full mb-4 md:m-4 lg:w-[47%] mr-1" key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="">
              <CardHeader className="">
                <CardTitle className="">{blog.metadata.title}</CardTitle>
                <CardDescription >&emsp;{blog.metadata.description}</CardDescription>
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
