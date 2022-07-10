import {FC} from "react";
import {CartProductType, changeProductQuantity} from "../cartReducer";
import {useDispatch} from "react-redux";
import s from "./CartProduct.module.css";

type ProductPropsType = {
  product: CartProductType
};

export const CartProduct: FC<ProductPropsType> = ({product}) => {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(changeProductQuantity(product.id, product.price, -1));
  };
  const increaseQuantity = () => {
    dispatch(changeProductQuantity(product.id, product.price, 1));
  };

  return (
    <div className={s.cartProduct}>
      <div className={s.productImage}><img src={product.imageUrl} alt={"Product Img"}/></div>
      <div className={s.productDescription}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className={s.quantityBlock}>
        <button onClick={decreaseQuantity}>-</button>
        <p>{product.quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};
