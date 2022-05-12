import { Button } from "@mui/material";
import { ITEMS_PER_PAGE } from "../../utils/constants";

export const PaginationView = ({ totalItems, currentPage = 1, setCurrentPage }) => {
 

  if (!totalItems || totalItems === 0) return null;
  const roundUp = (totalItems % ITEMS_PER_PAGE) === 0 ? 0 : 1;
  const paginationCount = Math.floor(totalItems / ITEMS_PER_PAGE) + roundUp;
  const paginationArray = [...Array(paginationCount).keys()];

  const handleClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="pagination">
      {paginationArray.map((item) => (
        <Button
          key={`btn-${item + 1}`}
          data-testid={`btn-${item + 1}`}
          variant={item === currentPage ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleClick(item)}
        >
          {item + 1}
        </Button>
      ))}
    </div>
  );
};
