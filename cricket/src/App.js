import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AdminHome from "./components/AdminHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/adminHome" element={<AdminHome />} />
        {/* <Route exact path="/guestHome" element={<GuestHome />} /> */}

        <Route
          element={() => {
            <div>Invalid URL</div>;
          }}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
