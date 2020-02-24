//Using (thunk)which is a function that returns a function that gives access to dispatch
//So the application can dispatch multiple actions and handle the async code


import { resetSignUpForm } from "./signUpForm"
//synch action creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user //shorthand same as payload: user
  }
}

//async action creators

export const signIn = credentials => {
  console.log("credentials are", credentials)
  console.log(JSON.stringify(credentials));
  return dispatch => { //dispatch from thunk
    return fetch("http://localhost:3000/signin", { //api fetch call to get the Data
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


export const signUp = credentials => {
  console.log("credentials are", credentials)
  console.log(JSON.stringify(credentials));
  const data = { user: credentials };
  return dispatch => {
    return fetch("http://localhost:3000/signup", {
      include: "credentials",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        //alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(resetSignUpForm())

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

// export const signOut = () => {
//   return dispatch => {
//     return fetch("http://localhost:3000/signup"), {
//       credentials: "include",
//       method: "POST",
//       body: "",
//       headers: {
//         "Content-Type": "application/json"
//      },
//     }
//   }

 //    return {
 //      type: 'SIGN_OUT',
 //      payload: {  signedIn: false}
 //    }
 // }
