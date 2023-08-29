import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const darkTheme = {
//   textColor: "whiteSmoke",
//   backgroundColor: "#111"
// }
// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whiteSmoke"
// }

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


