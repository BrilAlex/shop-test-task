import {FC} from "react";
import {ProductType} from "../../../app/api";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../Cart/cartReducer";
import s from "./Product.module.css";

type ProductPropsType = {
  product: ProductType
};

export const Product: FC<ProductPropsType> = ({product}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className={s.product}>
      <img src={product.imageUrl} alt={"Product Img"}/>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <button className={s.addToCartButton} onClick={addToCart}>Add to cart</button>
    </div>
  );
};
