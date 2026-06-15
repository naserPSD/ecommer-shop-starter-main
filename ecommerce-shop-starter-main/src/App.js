import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
// import { ProductContext } from "./contexts/ProductContext";

const App = () => {
  const { isLogIn } = useContext(AuthContext);
  return (
    <div className=" gap-2 overflow-hidden mb-4">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={isLogIn ? <Home /> : <Navigate to="/login" />}
          />
          {/* <Route path="/products/:id" element={<Product />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
