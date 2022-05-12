import { fetchSearchResultsFromApi } from "./http";

const errorData = JSON.stringify({ status: 500, body: { message: "error" } });

const response = JSON.stringify({
  results: [{ description: "description", title: "title", url: "https://test.com/test" }],
  total_count: 50,
});
describe("utils/http", () => {
  describe("fetchSearchResultsFromApi", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    test("should give results from api", async () => {
      fetch.mockResponseOnce(response);

      const config = await fetchSearchResultsFromApi("sky", 1, 10);

      expect(fetch).toHaveBeenCalledWith("http://localhost:3001/search?query=sky&page=1&limit=10", undefined);
      expect(config.payload).toEqual(response);
    });
  });
});
