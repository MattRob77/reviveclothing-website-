export default(state={}, action) => {
switch (action.type) {
  case "GET_PRODUCTS":

  const products = {}

  action.payload.forEach(product => {
    products[product.id] = product
  })

  return { ...state, ...products }


  default:
  return state;

}

}







//Not listening to any actions only showing products
