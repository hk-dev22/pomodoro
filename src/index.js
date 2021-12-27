import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import SettingsContextProvider from "./context/SettingsContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  rootElement
);
