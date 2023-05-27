import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ViewProduct from "./components/Product/ViewProduct";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/product/:id" element={<ViewProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
