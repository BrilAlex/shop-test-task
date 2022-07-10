import s from "./OrderForm.module.css"

export const OrderForm = () => {
  return (
    <form className={s.orderForm}>
      <input placeholder={"Name"}/>
      <input placeholder={"Surname"}/>
      <input placeholder={"Address"}/>
      <input placeholder={"Phone"}/>
      <button type={"submit"}>Order</button>
    </form>
  );
};
