import React, { useState } from "react";
import {
  Modal,
  Typography,
  Grid,
  Paper,
  TextField,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";
import { Form, Formik, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import AsyncSelect from "react-select/async";
import { ReactSelect } from "../Select";
import { SnackBar } from "../SnackBar";
import { useStore } from "../../store/index";
import { object as yupObject, string as yupString } from "yup";
import moment from "moment";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

//validation
const userFormSchema = yupObject().shape({
  name: yupString().required("User name is required"),
  dob: yupString().required("Date of birth is required"),
  address: yupString().required("Enter the Address"),
});

export const UserForm = (props) => {
  const classes = useStyles();
  const [userList, { createUser, updateUser }] = useStore("userList");
  const [userStatus, setUserStatus] = useState();
  let initialValues = {
    id: uuidv4(),
    name: "",
    dob: "",
    address: "",
    gender: "",
    college: "",
    hobbies: "",
    createdDate: moment().format(),
  };

  if (props.id && userList.find((item) => item.id === props.id)) {
    const user = userList.find((item) => item.id === props.id);
    initialValues = {
      id: user.id,
      name: user.name,
      dob: user.dob,
      address: user.address,
      gender: user.gender,
      college: user.college,
      hobbies: user.hobbies,
      createdDate: user.createdDate,
    };
  }
  //function to load college options
  const loadOptions = async (inputValue, callback) => {
    const requestResults = await fetch(
      `http://universities.hipolabs.com/search?name=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => data);
    const modifiedResults =
      requestResults &&
      requestResults.map((item) => {
        const newItem = { value: item.name, label: item.name };
        return newItem;
      });

    callback(modifiedResults);
  };

  //invoked when submit is pressed- form
  const onSubmit = (values) => {
    console.log("val", values);
    console.log("val", new Date(values.createdDate));
    if (props.id === "new") {
      createUser(values);
      setUserStatus("User successfuly created");
    } else {
      updateUser(props.id, values);
      setUserStatus("User successfuly updated");
    }
    props.onClose();
  };

  const onCloseSnackBar = () => {
    setUserStatus(null);
  };
  return (
    <>
      <Modal open={props.open} className={classes.modal}>
        <Paper className={classes.paper}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">
                {props.id === "new" ? "Create User" : "Edit User"}
              </Typography>
            </Grid>
            <Formik
              validationSchema={userFormSchema}
              initialValues={initialValues}
              onSubmit={(values) => onSubmit(values)}
            >
              {({ values, handleChange, setFieldValue }) => (
                <Form>
                  <Grid item className={classes.grid} xs>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>Name</Typography>
                          <TextField
                            variant="outlined"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            inputProps={{ maxLength: 25 }}
                            className={classes.input}
                          />
                          <ErrorMessage name="name">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>Date of Birth</Typography>
                          <TextField
                            variant="outlined"
                            type="date"
                            name="dob"
                            onChange={handleChange}
                            value={values.dob}
                            InputProps={{
                              inputProps: {
                                max: moment().format("YYYY-MM-DD"),
                              },
                            }}
                            className={classes.input}
                          />
                          <ErrorMessage name="dob">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs className={classes.grid}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>Address</Typography>
                          <TextField
                            multiline
                            variant="outlined"
                            name="address"
                            onChange={handleChange}
                            value={values.address}
                            rows={1}
                            inputProps={{ maxLength: 150 }}
                            className={classes.input}
                          />
                          <ErrorMessage name="address">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>Gender</Typography>
                          <Select
                            options={genderOptions}
                            onChange={(value) => {
                              setFieldValue("gender", value);
                            }}
                            value={values.gender}
                            className={classes.input}
                          />
                          <ErrorMessage name="gender">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs className={classes.grid}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>College</Typography>
                          <AsyncSelect
                            loadOptions={loadOptions}
                            onChange={(value) => {
                              setFieldValue("college", value);
                            }}
                            value={values.college}
                            className={classes.input}
                            placeholder="Search to load options"
                          />
                          <ErrorMessage name="college">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid container direction="column">
                          <Typography>Hobbies</Typography>
                          <ReactSelect
                            onChange={(value) => {
                              setFieldValue("hobbies", value);
                            }}
                            value={values.hobbies}
                            className={classes.input}
                          />
                          <ErrorMessage name="hobbies">
                            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.grid}>
                      <Grid container justify="center" spacing={2}>
                        <Grid item>
                          <Fab
                            variant="extended"
                            color="primary"
                            onClick={() => props.onClose()}
                          >
                            Cancel
                          </Fab>
                        </Grid>
                        <Grid item>
                          <Fab variant="extended" color="primary" type="submit">
                            Submit
                          </Fab>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Paper>
      </Modal>
      <SnackBar
        status={userStatus}
        onCloseError={onCloseSnackBar}
        color="green"
      />
    </>
  );
};

//styles for component
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    padding: theme.spacing(2, 4),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    paddingTop: theme.spacing(2),
  },
  input: {
    width: "30em",
  },
}));
