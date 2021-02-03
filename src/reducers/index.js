export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
       return {
        //always returning an object
        ...state,
        cart: {
          ...state.cart, //always spread the state, even if there is only one: future-proofing
          //[...this.state.cart.products, action.payload],
          products: state.cart.products.concat(action.payload), //same as above
        },
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [
            ...state.cart.products.filter(
              (bookId) => bookId !== action.payload
            ),
          ],
        },
      };

    case "SET_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    default:
      return state;
  }
}
