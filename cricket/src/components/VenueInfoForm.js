import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "./Axios.js";

const MatchInfoForm = () => {
  const [state, setState] = useState({
    stadium_name: "",
    total_crowd_present: "",
    city: "",
    state: "",
    country: "",
    location: "",
    match_id: "",
  });

  const submitVenueInfoHandler = async (e) => {
    e.preventDefault();
    console.log("Venue info entered is ", state);
    await axios.post("/postVenueInfo", state);
  }; //Call Axios to Post

  return (
    <div className="venueInfoForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Stadium Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Stadium Name"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, stadium_name: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Total Crowd Present</Form.Label>
          <Form.Control
            type="number"
            placeholder="Total Crowd Present in the Stadium"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, total_crowd_present: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, city: e.target.value };
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
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, country: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, location: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Match ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Match ID"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, match_id: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={submitVenueInfoHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MatchInfoForm;
