import React, { useState } from "react";
import {
  Typography,
  Card,
  IconButton,
  CardHeader,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import UserForm from "./UserForm";
import { deleteUser } from "../../reduxStore/action/userActions";

export const UserList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState();
  const openModal = (id) => {
    setUserToEdit(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const onClickDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const userList = useSelector((state) => state.users.userList);
  const sortedList = userList.slice().sort(function (a, b) {
    return new Date(b.createdDate) - new Date(a.createdDate);
  });
  if (userList && userList.length > 0) {
    return (
      <>
        <GridList cols={3} cellHeight="auto" spacing={20}>
          {sortedList.map((user, index) => (
            <GridListTile key={index}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={<AccountBoxIcon fontSize="large" />}
                  action={
                    <>
                      <IconButton onClick={() => openModal(user.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => onClickDelete(user.id)}>
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
        <UserForm open={modal} onClose={closeModal} id={userToEdit} />
      </>
    );
  } else {
    return <Typography variant="h2">No data available {userList}</Typography>;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  card: {
    maxWidth: theme.spacing(46),
  },
}));
