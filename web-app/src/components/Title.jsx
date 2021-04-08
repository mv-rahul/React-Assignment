import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const Title = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <Grid item>
        <Typography variant="h4" style={{ color: "white" }}>
          Popular
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  label: { color: "white" },
  grid: {
    paddingLeft: theme.spacing(10),
    backgroundColor: "#212121",
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
