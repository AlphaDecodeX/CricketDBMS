import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "./Axios.js";
const MatchInfoForm = () => {
  const [state, setState] = useState({
    opponent_team: "",
    india_total_runs: "",
    opponent_total_runs: "",
    winner: "",
    format: "",
  });

  const submitMatchInfoHandler = async (e) => {
    e.preventDefault();
    console.log("Data from Match Info ", state);
    await axios.post("/addMatchInfo", state);
  }; //Call Axios to Post

  return (
    <div className="matchInfoForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Opponent Team</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Opponent Team"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, opponent_team: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>India Total Runs</Form.Label>
          <Form.Control
            type="number"
            placeholder="India's Total Runs"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, india_total_runs: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Opponent Total Runs</Form.Label>
          <Form.Control
            type="number"
            placeholder="Opponent's Total Runs"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, opponent_total_runs: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Winner</Form.Label>
          <Form.Control
            type="text"
            placeholder="Winner Team"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, winner: e.target.value };
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Format</Form.Label>
          <Form.Control
            type="text"
            placeholder="Format of the Match (T20, ODI, Test)"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, format: e.target.value };
              });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={submitMatchInfoHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MatchInfoForm;
