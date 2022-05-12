import React, { useCallback, useState } from "react";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import { fetchSearchResultsFromApi } from "../../utils/http";

export const SearchResultContext = React.createContext();
export const SearchResultContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [apiError, setApiError] = useState();

  const getSlugValue = (slugs) => {
    return slugs[slugs.length - 1];
  };
  const formatData = (list) => {
    return list.map((item) => ({
      ...item,
      slug: getSlugValue(item.url.split("/")),
    }));
  };

  const fetchSearchResults = useCallback(async (searchFor, page = 0, limit = ITEMS_PER_PAGE) => {
    fetchSearchResultsFromApi(searchFor, page, limit)
      .then((response) => {
        setSearchResults(formatData(response.payload.results));
        setTotalCount(response.payload.total_count);
      })
      .catch((error) => {
        setApiError(true);
      });
  }, []);

  return (
    <SearchResultContext.Provider
      value={{
        fetchSearchResults,
        apiError,
        searchResults,
        totalCount,
      }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};
