import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export const Header = () => {
  const NavLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));
  return (
    <AppBar position="static" style={{ backgroundColor: "#f7941d" }}>
      <Toolbar>
        <Grid container style={{}}>
          <Grid item component={NavLink} to={`/`}>
            <HomeRoundedIcon fontSize="large" style={{ color: "black" }} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
