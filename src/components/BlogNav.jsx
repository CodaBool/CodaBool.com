import { House } from 'lucide-react'
import { posts } from '@/lib/posts'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function BlogNav({ current }) {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {current !== 1 &&
          <PaginationItem>
            <PaginationPrevious to={`/blog/${current - 1}`} size={20} />
          </PaginationItem>
        }
        <PaginationItem>
          <PaginationLink to="/blog"><House size={42} style={{ top: '-3px', position: 'relative' }} /></PaginationLink>
        </PaginationItem>
        {current < posts.length &&
          <PaginationItem>
            <PaginationNext to={`/blog/${current + 1}`} />
          </PaginationItem>
        }
      </PaginationContent>
    </Pagination>
  )
}
