import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppViews } from "./components/AppViews";
import { AppStore } from "./store/index";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <AppStore>
      <BrowserRouter>
        <ThemeProvider>
          <CssBaseline />
          <AppViews />
        </ThemeProvider>
      </BrowserRouter>
    </AppStore>
  );
}

export default App;
