import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppViews } from "./reduxComponents/AppView";
import { AppStore } from "./store/index";
import ThemeProvider from "./theme/ThemeProvider";
import { Provider } from "react-redux";
import { Store } from "./reduxStore/store";

function App() {
  return (
    <Provider store={Store}>
      <CssBaseline />
      <AppViews />
    </Provider>
  );
}

export default App;
