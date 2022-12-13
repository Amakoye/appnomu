import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import React from "react";
import { tokens } from "../theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display={"flex"} alignItems="center" pl={2} pr={2} pt={1}>
      <AppBar component="nav" color="default">
        <Toolbar>
          {/* logo */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: colors.greenAccent[400],
                fontFamily: "Pacifico",
              }}
            >
              App nomu
            </Typography>
          </Box>
          {/* nav links */}
          <Box display="flex" ml="auto" columnGap={5} mr={5}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
