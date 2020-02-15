//synch action creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}



//async action creators

export const signIn = credentials => {
  console.log("credentials are", credentials)
  console.log(JSON.stringify(credentials));
  return dispatch => {
    return fetch("http://localhost:3000/signin", {
      include: "credentials",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(credentials)
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        //alert(user.error)
      } else {
        dispatch(setCurrentUser(user))

      }
    })
    .catch(console.log)
  }
}



export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },

    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
