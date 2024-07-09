import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./app/layout/RootLayout";
import HomePage from "./Routes/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import SingleProductPage from "./Routes/SingleProductPage/SingleProductPage";
import CartPage from "./Routes/Cart/CartPage";
import CheckoutPage from "./Routes/Checkout/CheckoutPage";
import SuccessPage from "./Routes/SuccessPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/puppy/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/success" element={<SuccessPage />} />
      </>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
