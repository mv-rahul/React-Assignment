import React from "react";
import { Grid } from "@material-ui/core";

export const AppLayoutBody = ({ children }) => {
  return (
    <Grid item xs style={{ padding: "2em" }}>
      {children}
    </Grid>
  );
};
