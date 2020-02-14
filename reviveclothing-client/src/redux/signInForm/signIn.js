const initialState = {
  email: "",
  username: "",
  password: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNIN_FORM":
   return action.formData
    default:
    return state
  }
}
