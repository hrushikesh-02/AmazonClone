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
      {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/product/*" element={<HomePage />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
