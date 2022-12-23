import { Theme, ThemeOptions } from "@mui/material";
import { tokens } from "../theme";

export default function TextField(theme: Theme): ThemeOptions["components"] {
  const colors = tokens(theme.palette.mode);
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-underline:before": {
            borderBottomColor: `${colors.greenAccent[500]}`,
          },
        },
      },
    },
  };
}
