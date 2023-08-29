import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from "./theme";
import { ThemeProvider } from 'styled-components';

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whiteSmoke"
// }

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


