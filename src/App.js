import Header from "./widgets/header/header";
import Hero from "./widgets/hero/hero";
import RegistrationForm from "./widgets/registrationForm/registrationForm";
import UserInfo from "./widgets/userInfo/userInfo";
import Footer from "./widgets/footer/footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import E404Page from "./widgets/e404/e404";

function App() {
  return (
    <Router className={"app"}>
      <Header />
      <Routes>
        <Route path="/userInfo" element={<UserInfo />} />
        <Route
          path="/"
          element={
              <Hero />
          }
        />
        <Route path="/*" element={<E404Page />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
