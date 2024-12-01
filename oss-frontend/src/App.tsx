import Registrationform from "./Pages/RegisterCustomer";
import LoginForm from "./Pages/UserLogin";
import RegistrationOTP from "./Pages/RegistrationOTP";
import PasswordResetOTP from "./Pages/RestPasswordOTP";
import PasswordReset from "./Pages/PasswordReset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCustomer from "./Pages/RegisterCustomer";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<RegisterCustomer />} />
        <Route path="/registrationOTP" element={<RegistrationOTP />} />
        <Route path="/loginForm" element={<LoginForm />} />

        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/passwordResetOTP" element={<PasswordResetOTP />} />
      </Routes>
    </Router>
    // <div className="App">
    //   {/* <RegistrationOTP/> */}
    //   <Registrationform/>
    //   {/* <LoginForm/> */}
    //   {/* <PasswordResetOTP/> */}
    //   {/* <PasswordReset/> */}
    // </div>

  );
}

export default App;
