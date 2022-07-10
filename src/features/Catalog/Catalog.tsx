import {Product} from "./Product/Product";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../../app/store";
import {ProductType} from "../../app/api";
import {useEffect} from "react";
import {fetchProducts} from "./catalogReducer";
import s from "./Catalog.module.css";

export const Catalog = () => {
  const productsData = useSelector<AppStateType, ProductType[]>(state => state.catalog.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <div className={s.catalog}>
      <h1>Catalog</h1>
      <div className={s.productsList}>
        {productsData.map(p => <Product key={p.id} product={p}/>)}
      </div>
    </div>
  );
};
