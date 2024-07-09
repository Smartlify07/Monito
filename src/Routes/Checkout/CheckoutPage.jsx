import Breadcrumbs from "../../app/Components/Breadcrumbs";
import DeliveryAddress from "./DeliveryAddress";
import PaymentDetails from "./PaymentDetails";
import ShippingMethod from "./ShippingMethod";
import CheckoutPrice from "./CheckoutPrice";
import CheckoutSummary from "./CheckoutSummary";
import { Formik } from "formik";
import * as Yup from "yup";
import CartSummary from "../Cart/CartSummary";

const CheckoutPage = () => {
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
          >
            <>
              <div className="flex flex-col order-2  lg:items-baseline justify-between lg:order-1 lg:w-5/12 lg:gap-4">
                <DeliveryAddress />
                <ShippingMethod />
                <PaymentDetails />
                <div className="hidden border border-black lg:hidden">
                  <CheckoutPrice />
                </div>
              </div>

              <div className="hidden  lg:order-2 lg:w-6/12 lg:block">
                <CheckoutSummary />
              </div>
            </>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
