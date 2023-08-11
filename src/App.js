import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ProductPage from "./pages/product/ProductPage";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path={process.env.REACT_APP_BASE_URL + ""}
            element={<HomePage />}
          />
          <Route
            path={process.env.REACT_APP_BASE_URL + "product/:id"}
            element={<ProductPage />}
          />
          <Route
            path={process.env.REACT_APP_BASE_URL + "checkout"}
            element={<CheckoutPage />}
          />
          <Route
            path={process.env.REACT_APP_BASE_URL + "search"}
            element={<SearchPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
