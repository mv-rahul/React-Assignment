import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export const Home = () => {
  const NavLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));
  return (
    <div>
      <Grid container direction="column" alignItems="center" spacing={6}>
        <Grid item xs>
          <Typography variant="h4">Welcome</Typography>
        </Grid>
        <Grid item xs>
          <Button
            component={NavLink}
            to={`users/`}
            style={{ backgroundColor: "#f7941d" }}
          >
            View User List
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
