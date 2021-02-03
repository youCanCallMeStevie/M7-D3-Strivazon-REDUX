export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.concat(action.payload),
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
