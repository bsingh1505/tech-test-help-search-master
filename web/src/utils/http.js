const BASE_URL = "http://localhost:3001/";
// http://localhost:3001/search?query=broadband
const fetchApiData = async (url, options) => {
  const response = await fetch(url, options);

  if (response.ok) {
    const payload = await response.json();
    return { payload };
  }
  const message = await response.text();
  return {
    error: {
      status: response.status,
      message,
    },
  };
};

export const fetchSearchResultsFromApi = async (term, page, limit) => {
  const endPoint = `${BASE_URL}search?query=${term}&page=${page}&limit=${limit}`;

  return await fetchApiData(endPoint);
};
