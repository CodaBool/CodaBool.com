import { Home } from 'lucide-react'
import { getNumOfBlogPosts } from '@/app/(main)/blog/util'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function BlogNav({ current }) {
  const numberOfPosts = getNumOfBlogPosts()
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {current !== 1 &&
          <PaginationItem>
            <PaginationPrevious href={`/blog/${current - 1}`} size={20} />
          </PaginationItem>
        }
        <PaginationItem>
          <PaginationLink href="/blog"><Home size={42} style={{ top: '-3px', position: 'relative' }} /></PaginationLink>
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
