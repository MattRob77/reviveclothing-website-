import CartActionTypes from './cartTypes';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});


//defined action addItem that gets the item
//creates the new action with the actionType of ADD_ITEM
//passing the item in as the payload
