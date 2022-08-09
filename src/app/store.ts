import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CartActionType, cartReducer} from "../features/Cart/cartReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CatalogActionType, catalogReducer} from "../features/Catalog/catalogReducer";
import {useDispatch} from "react-redux";
import {loadCartFromLS, saveCartToLS} from "../utils/localStorageUtils";

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, loadCartFromLS(), applyMiddleware(thunk));

store.subscribe(() => {
  saveCartToLS({
    cart: store.getState().cart,
  });
});

export type RootActionsType = CatalogActionType | CartActionType;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
