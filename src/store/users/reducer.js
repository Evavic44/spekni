import { usersActionTypes } from "./action";

const usersInitialState = {
  user: null
};

export default function reducer(state = usersInitialState, action) {
  switch (action.type) {
    case usersActionTypes.SET_USER: {
        return { ...state, user: action.payload };
      }
    default:
      return state;
  }
}
