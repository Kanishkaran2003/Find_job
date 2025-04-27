
import { Pagination } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const PaginationControls = ({ currentPage, setCurrentPage, totalPages }: PaginationControlsProps) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Item onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft size={16} />
        </Pagination.Item>
        
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        
        <Pagination.Item onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <ChevronRight size={16} />
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export default PaginationControls;
