import { Grid } from "@material-ui/core";
import React from "react";
import { AppLayoutBody } from "./AppLayoutBody";
import { AppLayoutHeader } from "./AppLayoutHeader";

export const AppLayout = ({ children }) => {
  return (
    <Grid container justify="center">
      {children}
    </Grid>
  );
};

AppLayout.Header = AppLayoutHeader;
AppLayout.Body = AppLayoutBody;
