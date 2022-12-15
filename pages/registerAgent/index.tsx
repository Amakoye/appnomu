import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import RegisterIcon from "../../src/assets/Mobile_signup.gif";
import { tokens } from "../../src/theme";

export default function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column" mt={5}>
      {/*----- Hero Block-----*/}
      <Grid item mt="5em">
        <Stack
          direction={matchesSM ? "column-reverse" : "row"}
          alignItems="center"
          justifyItems={matchesSM ? "center" : "space-between"}
        >
          <Box
            ml={matchesSM ? undefined : "5em"}
            pr={matchesSM ? "2em" : undefined}
            pl={matchesSM ? "2em" : undefined}
            width={matchesSM ? "100%" : 900}
          >
            <Typography
              variant="h2"
              textAlign={matchesSM ? "center" : undefined}
              sx={{
                fontWeight: 600,
                fontSize: 40,
                marginBottom: 2,
              }}
            >
              Register as an agent
            </Typography>
            <form>
              <Box
                display="grid"
                gap="15px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "&>div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <TextField
                  label="Full name*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label="Phone number*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label="Email*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  label="National Identification*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label="District*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label="Sub county*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />
                <TextField
                  label="Village*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 2",
                  }}
                />

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    background: `${colors.greenAccent[400]}`,
                    textTransform: "none",
                    gridColumn: matchesSM ? "span 4" : "span 2",
                    fontSize: 16,
                    "&:hover": {
                      background: `${colors.greenAccent[500]}`,
                    },
                  }}
                >
                  Upload L-C recommendation letter
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    background: `${colors.greenAccent[400]}`,
                    textTransform: "none",
                    gridColumn: matchesSM ? "span 4" : "span 2",
                    fontSize: 16,
                    "&:hover": {
                      background: `${colors.greenAccent[500]}`,
                    },
                  }}
                >
                  Upload national ID
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box>
              <Button
                variant="contained"
                component="label"
                sx={{
                  background: `${colors.greenAccent[400]}`,
                  textTransform: "none",
                  marginTop: 2,
                  fontSize: 16,
                  "&:hover": {
                    background: `${colors.greenAccent[500]}`,
                  },
                }}
              >
                Register
              </Button>
            </form>
          </Box>
          <Box
            ml={matchesSM ? undefined : "auto"}
            mr={matchesSM ? undefined : "15em"}
          >
            <Image src={RegisterIcon} alt="purchase gif" />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
