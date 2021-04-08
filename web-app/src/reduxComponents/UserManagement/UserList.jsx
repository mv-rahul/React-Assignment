import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  CardHeader,
  GridList,
  GridListTile,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const data = [
  {
    id: 1,
    name: "John",
    dob: "13/02/1665",
    address: "Algeria",
    gender: "Male",
    college: "AA university",
    hobbies: "Cricket",
  },
  {
    id: 2,
    name: "Maya",
    dob: "13/02/1665",
    address: "Algeria",
    gender: "Male",
    college: "AA university",
    hobbies: "Cricket",
  },
  {
    id: 3,
    name: "Paul",
    dob: "13/02/1665",
    address: "Algeria",
    gender: "Male",
    college: "AA university",
    hobbies: "Cricket",
  },
  {
    id: 4,
    name: "Mat",
    dob: "13/02/1665",
    address: "Algeria",
    gender: "Male",
    college: "AA university",
    hobbies: "Cricket",
  },
  {
    id: 5,
    name: "Kim",
    dob: "13/02/1665",
    address: "Algeria",
    gender: "Male",
    college: "AA university",
    hobbies: "Cricket",
  },
];

export const UserList = () => {
  const classes = useStyles();
  return (
    <GridList cols={3} cellHeight="auto" spacing={20}>
      {data.map((user, index) => (
        <GridListTile key={index}>
          <Card className={classes.card}>
            <CardHeader
              avatar={<AccountBoxIcon fontSize="large" />}
              action={
                <>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              title={<Typography>{user.name}</Typography>}
              subheader={user.dob}
            />
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  card: {
    maxWidth: theme.spacing(40),
  },
}));
