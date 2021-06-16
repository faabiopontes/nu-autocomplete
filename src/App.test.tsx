import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should be rendered", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
