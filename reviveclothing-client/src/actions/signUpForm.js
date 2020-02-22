//synchronous action
export const updateSignUpForm = (formData) => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

export const resetSignUpForm = (formData) => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}
