import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ColorModeContext, tokens, useMode } from "../src/theme";
import Header from "../src/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Header />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
