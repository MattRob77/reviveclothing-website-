export default (state = null, action) => { //get the previous state
  switch (action.type) { //switch is like an if statement
    case "SET_CURRENT_USER":
      return action.user //returns new object
    case 'SIGN_OUT':
      return {};
      default:
    return state;
  }
};


//every reducer is a function that takes the state & action
//depending on the action it decides if it needs to re render
//returns new object
