import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Routes from "../routes";
import Dialog from "./dialog";
import Feedback from "./feedback";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <Dialog />
      <Feedback />
    </ThemeProvider>
  );
}

export default App;
