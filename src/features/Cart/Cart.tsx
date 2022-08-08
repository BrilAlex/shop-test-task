import {useSelector} from "react-redux";
import {AppStateType} from "../../app/store";
import {CartProductType} from "./cartReducer";
import {CartProduct} from "./CartProduct/CartProduct";
import {OrderForm} from "./OrderForm/OrderForm";
import s from "./Cart.module.css";

export const Cart = () => {
  const productsInCart = useSelector<AppStateType, CartProductType[]>(state => state.cart.productsInCart);
  const cartTotalSum = useSelector<AppStateType, number>(state => state.cart.cartTotalSum);

  return (
    <div>
      <h2>Cart</h2>
      <div className={s.cart}>
        {
          productsInCart.length !== 0 ?
            <>
              <div className={s.cartItems}>
                <div>
                  {productsInCart.map(p => <CartProduct key={p.id} product={p}/>)}
                </div>
                <div className={s.cartTotal}>Total: {cartTotalSum}</div>
              </div>
              <div>
                <OrderForm/>
              </div>
            </>
            :
            <div>Your cart is empty</div>
        }
      </div>
    </div>
  );
};
