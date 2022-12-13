import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Grid container direction="column" mt={5}>
      {/*----- Hero Block-----*/}
      <Grid item mt={5}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyItems="center"
        >
          <Grid item>
            <Typography variant="h2">AppNomu agent</Typography>
            <Typography variant="body1">
              Together for a good customer service experience
            </Typography>
          </Grid>
          <Grid item>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
