import {ProductType} from "../../app/api";

export type CartProductType = ProductType & { quantity: number };

type InitStateType = typeof initState;
const initState = {
  productsInCart: [] as CartProductType[],
  cartTotalSum: 0,
};

export const cartReducer = (state = initState, action: CartActionType): InitStateType => {
  switch (action.type) {
    case "ADD-PRODUCT-TO-CART":
      const newProduct = action.product;
      const isProductInCart = state.productsInCart.find(p => p.id === newProduct.id);
      let newProductsInCart = [] as CartProductType[];
      if (isProductInCart) {
        newProductsInCart = state.productsInCart
          .map(p => p.id === newProduct.id ? {...p, quantity: p.quantity + 1} : p);
      } else {
        newProductsInCart = [...state.productsInCart, {...action.product, quantity: 1}];
      }
      return {
        ...state,
        productsInCart: newProductsInCart,
        cartTotalSum: state.cartTotalSum + action.product.price,
      };
    case "CHANGE-PRODUCT-QUANTITY":
      return {
        ...state,
        productsInCart: state.productsInCart
          .map(p => p.id === action.productID ? {...p, quantity: p.quantity + action.quantity} : p)
          .filter(p => p.quantity > 0),
        cartTotalSum: state.cartTotalSum + (action.productPrice * action.quantity),
      }
    default:
      return state;
  }
};

// Action Creators
export type CartActionType =
  | ReturnType<typeof addProductToCart>
  | ReturnType<typeof changeProductQuantity>;
export const addProductToCart = (product: ProductType) =>
  ({type: "ADD-PRODUCT-TO-CART", product} as const);
export const changeProductQuantity = (productID: number, productPrice: number, quantity: number) =>
  ({type: "CHANGE-PRODUCT-QUANTITY", productID, productPrice, quantity} as const);
