import {catalogAPI, ProductType} from "../../app/api";
import {AppThunkType} from "../../app/store";

type InitStateType = typeof initState;

const initState = {
  products: [] as ProductType[],
};

export const catalogReducer = (state = initState, action: CatalogActionType): InitStateType => {
  switch (action.type) {
    case "SET-PRODUCTS-DATA":
      return {...state, products: action.products};
    default:
      return state;
  }
};

// Action Creators
export type CatalogActionType = ReturnType<typeof setProducts>;
const setProducts = (products: ProductType[]) => ({type: "SET-PRODUCTS-DATA", products} as const);

// Thunk Creators
export const fetchProducts = (): AppThunkType => (dispatch) => {
  catalogAPI.getProducts().then(data => {
    dispatch(setProducts(data));
  });
};
