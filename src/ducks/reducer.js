const initialState = {
  username: "",
  profilePicture: ""
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function updateUser(username, profilePicture) {
  return {
    type: UPDATE_USER,
    payload: {
      username,
      profilePicture
    }
  };
}
