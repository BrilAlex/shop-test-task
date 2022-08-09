import {CartInitStateType} from "../features/Cart/cartReducer";

export const loadCartFromLS = () => {
  try {
    const serializedCart = localStorage.getItem("shopping-cart-data");
    if (!serializedCart) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    return undefined;
  }
};

export const saveCartToLS = (cartData: {cart: CartInitStateType}) => {
  try {
    const serializedCart = JSON.stringify(cartData);
    localStorage.setItem("shopping-cart-data", serializedCart);
  } catch (error) {
    console.log(error);
  }
};