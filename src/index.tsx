import React from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';

//redux
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
      <BrowserRouter  >  
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App/>
          </ThemeProvider>
        </StyledEngineProvider>
        </BrowserRouter>  
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
