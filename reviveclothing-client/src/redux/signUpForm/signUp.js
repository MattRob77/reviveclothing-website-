const initialState = {
  displayName: '',
  email: "",
  password: "",
  confirmPassword: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
   return action.formData
    default:
    return state
  }
}
