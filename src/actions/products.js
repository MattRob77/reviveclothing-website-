//async action creator
export const getProducts = () => {
  return dispatch => {
    fetch("http://localhost:3000/products") //fetching the data from the api
    .then(resp => resp.json()) //getting the json data
    .then(products => {
      dispatch({ type: "GET_PRODUCTS", payload: products})//dispatches to the reducer
    })
  }
}


//1.Action
//2.Reducer
//3.Shop.component
