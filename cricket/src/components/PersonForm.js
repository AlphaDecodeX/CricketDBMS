import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "./Axios";

const PersonForm = () => {
  const [state, setState] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    state: "",
    category: "",
    p_role: "",
    debut_date: "",
    c_role: "",
    tenure: "",
    start_date: "",
    isPlayerOpen: false,
    isCoachOpen: false,
    isPersonOpen: true,
  });

  const addCoachHandler = (e) => {
    e.preventDefault();
    console.log("Data Added is : ", state);
    setState((prevState) => {
      return {
        ...prevState,
        isPlayerOpen: false,
        isCoachOpen: true,
        isPersonOpen: false,
      };
    });
  };
  const addPlayerHandler = (e) => {
    e.preventDefault();
    console.log("Data Added is : ", state);
    setState((prevState) => {
      return {
        ...prevState,
        isPlayerOpen: true,
        isCoachOpen: false,
        isPersonOpen: false,
      };
    });
  };

  const addDetailsHandler = async (e) => {
    e.preventDefault();
    // state ==> Data
    console.log("Data From Person Page is ", state);
    await axios.post("/addPerson", state);
  };

  const submitCoachDetails = async () => {};

  return (
    <div className="PersonForm">
      {state.isPlayerOpen ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Player Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Flayer Role"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, p_role: e.target.value };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Debut Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Player Debut Date"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, debut_date: e.target.value };
                });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addDetailsHandler}>
            Submit
          </Button>
        </Form>
      ) : null}

      {state.isCoachOpen ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Coach Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Flayer Role"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, role: e.target.value };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Tenure</Form.Label>
            <Form.Control
              type="number"
              placeholder="Coach Tenure"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, tenure: e.target.value };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Coach Start Date"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, start_date: e.target.value };
                });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addDetailsHandler}>
            Submit
          </Button>
        </Form>
      ) : null}

      {state.isPersonOpen ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, first_name: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, middle_name: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, last_name: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="DOB"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, dob: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, state: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setState((prevState) => {
                  return { ...prevState, category: e.target.value };
                });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addPlayerHandler}>
            Add Player
          </Button>
          ------
          <Button variant="primary" type="submit" onClick={addCoachHandler}>
            Add Coach
          </Button>
        </Form>
      ) : null}
    </div>
  );
};

export default PersonForm;
