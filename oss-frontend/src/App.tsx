import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AdminLayout";
import CustomerLayout from "./Layouts/CustomerLayout";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Admin App */}
      <Route path="/admin/*" element={<AppLayout />} />

      {/* Customer App */}
      <Route path="/customer/*" element={<CustomerLayout />} />

      {/* Handle unmatched routes */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default App;
