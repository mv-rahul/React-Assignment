import React from "react";
import { Grid, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#212121" }}>
      <Grid container justify="center" xs={8}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography className={classes.label}>Home</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>|</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>
                    Terms and Condition
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>|</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>
                    Privacy Policy
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>|</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>
                    Collection Statement
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>|</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>Help</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>|</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.label}>
                    Manage Accounts
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography className={classes.label}>
                Copyright @ 2016 DEMO Streaming. All Right Reserved
              </Typography>
            </Grid>
            <Grid item className={classes.padding}>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Grid container>
                    <Grid item>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="30"
                        viewBox="0 0 166.1 299"
                      >
                        <path
                          fill="#FFF"
                          d="M166.1 52h-47.4c-5.6 0-11.9 7.4-11.9 17.2v34.3h59.3v48.8h-59.3V299h-56V152.3H0v-48.8h50.8V74.7C50.8 33.5 79.4 0 118.6 0H166v52z"
                        />
                      </svg> */}
                    </Grid>
                    <Grid item></Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item></Grid>
                    <Grid item></Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  label: { color: "white" },
  padding: {},
}));
