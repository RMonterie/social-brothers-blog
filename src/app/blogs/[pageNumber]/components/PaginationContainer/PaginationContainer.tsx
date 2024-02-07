import { Link } from "@/types/Link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface Props {
  pages: Link[];
  prevPage: number;
  nextPage: number;
}

export const PaginationContainer: React.FC<Props> = ({
  pages,
  prevPage,
  nextPage,
}) => {
  return (
    <Pagination className="mt-6 mb-24">
      <PaginationContent>
        {pages?.map((link, index) => (
          <PaginationItem key={index}>
            {link.label === "pagination.previous" && link.url !== null && (
              <PaginationPrevious href={`/blogs/${prevPage}`} />
            )}
            {link.label === "pagination.next" && link.url !== null && (
              <PaginationNext href={`/blogs/${nextPage}`} />
            )}
            {link.label === "..." && <PaginationEllipsis />}
            {link.label !== "pagination.previous" &&
              link.label !== "pagination.next" &&
              link.label !== "..." && (
                <PaginationLink
                  href={`/blogs/${link.label}`}
                  isActive={link.active}
                  className="text-xs text-[#313131]"
                >
                  {link.label}
                </PaginationLink>
              )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};
