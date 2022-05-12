import { useContext } from "react";
import { CardView } from "../card/card";
import { PaginationView } from "../pagination/pagination";
import { SearchResultContext } from "../../context/search-context/search-result-context";

export const SearchResultsView = ({ currentPage, setCurrentPage }) => {
  const { searchResults, totalCount } = useContext(SearchResultContext);
  return (
    <>
      <div>
        {searchResults.map((item) => (
          <CardView data={item} />
        ))}
        <PaginationView totalItems={totalCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
};
