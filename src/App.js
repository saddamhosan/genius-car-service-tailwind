import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import AddServices from "./Component/Home/AddServices";
import Home from "./Component/Home/Home";
import Login from "./Component/Login";
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
    </div>
  );
}

export default App;
