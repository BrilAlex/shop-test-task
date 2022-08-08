import s from "./OrderForm.module.css"
import {CartProductType} from "../cartReducer";
import {FC} from "react";
import {FormikErrors, useFormik} from "formik";

type OrderFormPropsType = {
  products: CartProductType[]
};

type OrderFormValuesType = {
  name: string
  surname: string
  address: string
  phone: string
}

const validate = (values: OrderFormValuesType) => {
  const errors: FormikErrors<OrderFormValuesType> = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.surname) {
    errors.surname = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
};

export const OrderForm: FC<OrderFormPropsType> = ({products}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      phone: "",
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify({userData: values, orderDetails: products}));
      formik.resetForm();
    },
  });

  return (
    <form className={s.orderForm} onSubmit={formik.handleSubmit}>
      <input placeholder={"Name"} {...formik.getFieldProps("name")}/>
      {
        formik.touched && formik.errors.name &&
        <span className={s.error}>{formik.errors.name}</span>
      }
      <input placeholder={"Surname"} {...formik.getFieldProps("surname")}/>
      {
        formik.touched && formik.errors.surname &&
        <span className={s.error}>{formik.errors.surname}</span>
      }
      <input placeholder={"Address"} {...formik.getFieldProps("address")}/>
      {
        formik.touched && formik.errors.address &&
        <span className={s.error}>{formik.errors.address}</span>
      }
      <input placeholder={"Phone"} {...formik.getFieldProps("phone")}/>
      {
        formik.touched && formik.errors.phone &&
        <span className={s.error}>{formik.errors.phone}</span>
      }
      <button type={"submit"}>Order</button>
    </form>
  );
};
