import Breadcrumbs from "../../app/Components/Breadcrumbs";
import DeliveryAddress from "./DeliveryAddress";
import PaymentDetails from "./PaymentDetails";
import ShippingMethod from "./ShippingMethod";
import CheckoutSummary from "./CheckoutSummary";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../app/store/cart/cartSlice";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const checkoutItems = useSelector(selectAllCartItems);

  return (
    <section className="flex font-intertight  lg:px-0 lg:py-10 items-center justify-center">
      <div className="lg:w-11/12 xl:w-10/12 w-full flex flex-col lg:pt-20 lg:gap-10">
        <Breadcrumbs />

        <div className="flex px-4 flex-col gap-10 lg:gap-0 lg:items-baseline justify-between lg:flex-row">
          <div className="block lg:hidden">
            <CheckoutSummary />
          </div>
          <Formik
            initialValues={{
              email: "",
              cardNo: "",
              expiry: "",
              cvc: "",
              cardHolder: "",
              billingAddress: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid Email address")
                .required("Your email is required"),
              cardNo: Yup.number().required("Your card number is required"),
              expiry: Yup.string().required(),
              cvc: Yup.number().required(),
              cardHolder: Yup.string().required(),
              billingAddress: Yup.string().required(),
            })}
            onSubmit={() => {
              console.log("Submit");
              if (checkoutItems.length > 0) {
                navigate("/success");
              }
            }}
          >
            <Form className="flex  justify-between gap-5">
              <div className="flex flex-col order-2 w-full  lg:items-baseline justify-between lg:order-1 lg:w-6/12 lg:gap-4">
                <DeliveryAddress />
                <ShippingMethod />
                <PaymentDetails />
              </div>

              <div className="hidden   lg:order-2 lg:w-6/12 lg:block">
                <CheckoutSummary />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};
const memoCheckoutPage = memo(CheckoutPage);
export default memoCheckoutPage;
