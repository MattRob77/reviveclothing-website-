//synch action creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


//async action creators
export const signIn = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  }
}
