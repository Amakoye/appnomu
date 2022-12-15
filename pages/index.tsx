import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import PurchaseIcon from "../src/assets/Successful_purchase.gif";
import { tokens } from "../src/theme";

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container direction="column" mt={5}>
      {/*----- Hero Block-----*/}
      <Grid item mt="5em">
        <Stack direction="row" alignItems="center" justifyItems="space-between">
          <Box ml="10em" mr="10em">
            <Image src={PurchaseIcon} alt="purchase gif" />
          </Box>
          <Box ml="5em">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: 60,
              }}
            >
              AppNomu agent
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 30,
                fontWeight: 300,
              }}
            >
              Get more done with AppNomu. Sell our services that <br /> include
              airtime, data, register clients for AppNomu and <br />
              collect loans from them for a commission.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 25,
                fontWeight: 300,
              }}
            >
              <span
                style={{
                  fontFamily: "pacifico",
                  color: colors.greenAccent[400],
                }}
              >
                AppNomu Agent
              </span>{" "}
              -Together for a good customer service experience.
            </Typography>
            <NextLink
              passHref
              href="/registerAgent"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  marginTop: 2,
                  background: `${colors.greenAccent[400]}`,
                  textTransform: "none",
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: 2,
                  "&:hover": {
                    background: `${colors.greenAccent[500]}`,
                  },
                }}
              >
                Get started
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
