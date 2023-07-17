import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Chat, Error } from "./pages";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Affiliates/Dashboard";
import Offers from "./components/Affiliates/Offers";
import Home from "./components/Affiliates/Home";
import PaymentDetails from "./components/Affiliates/PaymentDetails";
import UserDetails from "./components/Affiliates/UserDetails";


// import Chat from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';


import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
      

        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/affiliate/offers" element={<Offers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/paymentDetails" element={<PaymentDetails />} />
        <Route path="/UserDetails" element={<UserDetails />} />


        

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
