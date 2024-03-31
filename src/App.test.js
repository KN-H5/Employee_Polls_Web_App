import { render, screen } from "@testing-library/react";
import App from "App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import mockStore from "tests/MockStore";
import createTestStore from "tests/TestStore";

let store;

beforeEach(() => {
  store = createTestStore(mockStore);
});

describe("App", () => {
  it("will render the application", () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
