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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
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
