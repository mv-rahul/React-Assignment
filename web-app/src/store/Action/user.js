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
