import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import React, { FC } from "react";
import { tokens } from "../theme";

const Header: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display={"flex"} alignItems="center" pl={2} pr={2} pt={1}>
      <AppBar component="nav" color="default">
        <Toolbar>
          {/* logo */}
          <Box>
            <NextLink href="/" passHref style={{ textDecoration: "none" }}>
              <Typography
                variant="h2"
                sx={{
                  color: colors.greenAccent[400],
                  fontFamily: "Pacifico",
                }}
              >
                App nomu
              </Typography>
            </NextLink>
          </Box>
          {/* nav links */}
          <Box display="flex" ml="auto" columnGap={5} mr={5}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor={undefined}
            >
              <NextLink
                href="/"
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                <Tab label="Home" />
              </NextLink>
              <NextLink
                href="/registerClient"
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                <Tab label="Register client" />
              </NextLink>
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
