import TestRenderer from "react-test-renderer";
import { CardView } from "../card";

const dataWithAllKey = { description: "Description", title: "Title", url: "https://test.com/test", slugs: "test" };
const dataWithMissingKey = { description: "Description", slugs: "test" };

describe("Card component", () => {
  test("match snapshot : With all key", () => {
    const tree = TestRenderer.create(<CardView data={dataWithAllKey} />);
    expect(tree).toMatchSnapshot();
  });
  test("match snapshot : With missing key", () => {
    const tree = TestRenderer.create(<CardView data={dataWithMissingKey} />);
    expect(tree).toMatchSnapshot();
  });
  test("match snapshot : with missing data", () => {
    const tree = TestRenderer.create(<CardView />);
    expect(tree).toMatchSnapshot();
  });
});
