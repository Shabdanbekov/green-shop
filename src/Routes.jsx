import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1Page from "pages/Home1";
const Address = React.lazy(() => import("pages/Address"));
const MyAccount = React.lazy(() => import("pages/MyAccount"));
const ProductCheckout = React.lazy(() => import("pages/ProductCheckout"));
const ProductCart = React.lazy(() => import("pages/ProductCart"));
const ProductView = React.lazy(() => import("pages/ProductView"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1Page />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/productcart" element={<ProductCart />} />
          <Route path="/productcheckout" element={<ProductCheckout />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
