//action to create a user,values are passed and state is updated
const createUser = async (store, values) => {
  try {
    console.log("values", values);
    await store.update((state) => {
      const temp = state.userList;
      temp.push(values);
      state.userList = temp;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//action to update a user, id and values are passed,particular user with ide is fetched and state is updated
const updateUser = async (store, id, values) => {
  try {
    await store.update((state) => {
      const updatedList = state.userList.map((item) => {
        if (item.id === id) return values;
        else return item;
      });
      state.userList = updatedList;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//action to delete a user,id is passed , user removed with matching id
const deleteUser = async (store, id) => {
  try {
    await store.update((state) => {
      const updatedList = state.userList.filter((item) => item.id !== id);
      state.userList = updatedList;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userActions = {
  createUser,
  updateUser,
  deleteUser,
};
