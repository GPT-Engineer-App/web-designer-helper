import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#000000", // black
    800: "#333333", // dark gray
    700: "#666666", // medium gray
    600: "#999999", // light gray
    500: "#CCCCCC", // lighter gray
    400: "#FFFFFF", // white
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
