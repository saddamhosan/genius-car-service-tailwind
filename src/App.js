import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Component/About/About";
import Checkout from "./Component/Checkout";
import AddServices from "./Component/Home/AddServices";
import Home from "./Component/Home/Home";
import Login from "./Component/Login";
import Order from "./Component/Order";
import Register from "./Component/Register";
import RequireAuth from "./Component/RequireAuth";
import ServiceDetail from "./Component/ServiceDetail";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddServices />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
