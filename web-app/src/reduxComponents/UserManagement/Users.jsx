import React from "react";
import { Typography, Grid, TextField, InputAdornment } from "@material-ui/core";
import { UserList } from "./UserList";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";

export const Users = () => {
  const classes = useStyles();
  const userList = useSelector((state) => state.users.userList);

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5">User Dashboard</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.root}>
          <UserList />
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
  },
}));
