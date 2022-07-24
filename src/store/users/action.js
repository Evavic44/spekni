export const usersActionTypes = {
  SET_USER: "SET_USER",
};

export const setUser = (userDetails) => {
  return { type: usersActionTypes.SET_USER, payload: userDetails };
};
