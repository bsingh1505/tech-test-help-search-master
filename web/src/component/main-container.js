import React, { useState,useContext,useCallback, useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchView } from "./search";
import { SearchResultsView } from "./results";
import { SearchResultContext } from "../context/search-context";

export const MainContainer = () => {
  const { fetchSearchResults } = useContext(SearchResultContext);
  const navigate = useNavigate();
  let { key, page } = useParams();

  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Fetch data on load only if url contains key and page
   * This will help to reload page data on refresh
   */
  useEffect(() => {
    if (key && page) {
      fetchSearchResults(key, page - 1);
      setCurrentPage(page - 1);
      setSearchValue(key);
    }
  }, [key, page, fetchSearchResults]);

  /**
   * Fetch data as per search key
   * reset pagination to first
   */
  const fetchData = useCallback(() => {
    fetchSearchResults(searchValue, 0);
    navigate(`/${searchValue}/1`);
  }, [fetchSearchResults, searchValue, navigate]);

  const updatePaginationAndFetchData = (value) => {
    setCurrentPage(value);
    fetchSearchResults(searchValue, value);
    navigate(`/${searchValue}/${value + 1}`);
  };

  return (
    <div className="container">
      <SearchView setSearchValue={setSearchValue} fetchData={fetchData} searchValue={searchValue} />
      <SearchResultsView setCurrentPage={updatePaginationAndFetchData} currentPage={currentPage} />
    </div>
  );
};
