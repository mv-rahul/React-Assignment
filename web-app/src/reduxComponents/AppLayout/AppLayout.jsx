import React from "react";
import { Grid } from "@material-ui/core";
import { AppLayoutBody } from "./AppLayoutBody";
import { AppDrawer } from "./AppDrawer";

export const AppLayout = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

AppLayout.AppDrawer = AppDrawer;
AppLayout.Body = AppLayoutBody;
