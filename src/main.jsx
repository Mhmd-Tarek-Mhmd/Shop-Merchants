import { render } from "preact";
import { Provider } from "react-redux";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./components/app";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
