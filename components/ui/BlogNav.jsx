import { Home } from 'lucide-react'
import { getNumOfBlogPosts } from '@/app/blog/util'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export default function BlogNav({ current }) {
  const numberOfPosts = getNumOfBlogPosts()
  // const router = useRouter()

  console.log("number", numberOfPosts, current)

  // find out if there is one after
  // find out if there is one before
  // add a home button always


  // if after
  if (current < numberOfPosts) {
    console.log("there is another one after")
  }

  if (current === 1) {
    console.log("at first")
  }


  return (

    // <Row>
    //   <Pagination className="mx-auto my-5" size="lg" style={{width: '13rem'}}>
    //     {current > 1 && 
    //       <Pagination.First 
    //         onClick={() => {
    //           window.scrollTo(0, 0)
    //           router.push(`/blog/${current - 1}`)
    //         }}
    //       />}
    //     <Pagination.Item 
    //       onClick={() => {
    //         window.scrollTo(0, 0)
    //         router.push('/blog')
    //       }}
    //     >
    //       <HouseDoorFill size={20} />
    //     </Pagination.Item>
    //     {current < total &&
    //       <Pagination.Last 
    //         onClick={() => {
    //           window.scrollTo(0, 0)
    //           router.push(`/blog/${Number(current) + 1}`)
    //         }}
    //       />
    //     }
    //   </Pagination>
    // </Row>

    <Pagination>
      <PaginationContent>
        {current !== 1 &&
          <PaginationItem>
            <PaginationPrevious href={`/blog/${current - 1}`} />
          </PaginationItem>
        }
        <PaginationItem>
          <PaginationLink href="/blog"><Home /></PaginationLink>
        </PaginationItem>
        {current < numberOfPosts &&
          <PaginationItem>
            <PaginationNext href={`/blog/${current + 1}`} />
          </PaginationItem>
        }
      </PaginationContent>
    </Pagination>

  )
}
