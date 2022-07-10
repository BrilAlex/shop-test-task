import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../app/store";
import s from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const cartTotalSum = useSelector<AppStateType, number>(state => state.cart.cartTotalSum);

  const onCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className={s.header}>
      <div className={s.cartBlock}>
        <button className={s.cartButton} onClick={onCartClick}>Cart</button>
        {cartTotalSum > 0 && <div className={s.cartTotal}>Sum: {cartTotalSum}</div>}
      </div>
    </div>
  );
};
