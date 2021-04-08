import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppViews } from "./reduxComponents/AppView";
import { AppStore } from "./store/index";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <AppViews />
    </>
  );
}

export default App;
