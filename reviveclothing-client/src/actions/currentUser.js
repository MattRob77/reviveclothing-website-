//synch action creators

export const setCurrentuser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


//async action creators
export signin = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(username: "Junia", password:"password")
    })
  }
}
