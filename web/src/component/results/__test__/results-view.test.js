import React from "react";
import { shallow } from "enzyme";
import { SearchResultsView } from "../results-view";
import { SearchResultContext } from "../../../context/search-context/search-result-context";

const mockSearchResultContext = {
  fetchSearchResults: jest.fn(),
  searchResults: [],
};

const setupTest = () => {
  const wrapper = shallow(
    <SearchResultContext.Provider value={mockSearchResultContext}>
      <SearchResultsView />
    </SearchResultContext.Provider>
  );
  return {
    wrapper,
  };
};

describe("components/search-box/search-box-view", () => {
  test("should render", () => {
    const { wrapper } = setupTest();
    expect(wrapper.debug).toMatchSnapshot();
  });
});
