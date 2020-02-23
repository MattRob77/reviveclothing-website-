export default(state={}, action) => {
switch (action.type) {//checks the type that is equal to Get_Products
  case "GET_PRODUCTS":

  const products = {} //creating an empty object

  action.payload.forEach(product => { //iteraring over an array & setting for each product id key for products object
    products[product.id] = product
  })

  return { ...state, ...products }//spreading the objects into new object


  default:
  return state;

}

}







//Not listening to any actions only showing products
