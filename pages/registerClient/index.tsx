import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
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
          justifyContent="center"
        >
          <Box
            pr={matchesSM ? "2em" : undefined}
            pl={matchesSM ? "2em" : undefined}
            width={matchesSM ? "100%" : 600}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                fontWeight: 600,
                fontSize: 40,
                marginBottom: 2,
              }}
            >
              Register a client
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
                  label="Client name*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  label="Mobile number*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  label="Account number*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  label="Email address*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  label="District*"
                  fullWidth
                  variant="filled"
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
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
        </Stack>
      </Grid>
    </Grid>
  );
}
