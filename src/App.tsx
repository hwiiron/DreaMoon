import "./styles/globals.css";
import Router from "./router/Router";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <Router isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
