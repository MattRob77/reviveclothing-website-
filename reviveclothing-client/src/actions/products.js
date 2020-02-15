//async action creator
export const getProducts = () => {
  return dispatch => {
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then(products => {
      dispatch({ type: "GET_PRODUCTS", payload: products})
    })
  }
}
