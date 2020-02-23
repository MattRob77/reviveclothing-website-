//async action creator
export const getProducts = () => {
  return dispatch => {
    fetch("http://localhost:3000/products") //fetching the data from the api
    .then(resp => resp.json()) //getting the json data
    .then(products => {
      dispatch({ type: "GET_PRODUCTS", payload: products})//dispatching to the reducer making payload products that are in the DB
    })
  }
}


//1.Action
//2.Reducer
//3.Shop.component 
