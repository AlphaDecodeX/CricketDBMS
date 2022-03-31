import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});

  const setEmail = (e) => {
    setState((prevState) => {
      return { ...prevState, email: e.target.value };
    });
  };

  const setPassword = (e) => {
    setState((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (state.email === "bcci@cricket.com" && state.password === "12345678") {
      navigate("/adminHome");
    }
  };

  const guestLoginHandler = () => {
    navigate("/guestHome");
  };

  return (
    <div className="LoginPage">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={setEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginHandler}>
          Login As Admin
        </Button>
        -----
        <Button variant="primary" type="submit" onClick={guestLoginHandler}>
          Visit as Guest
        </Button>
      </Form>
    </div>
  );
};

export default Login;
