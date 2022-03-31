import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import axios from "./Axios.js";

const PlayerMatchInfoForm = () => {
  const [state, setState] = useState({
    total_runs_scored: "",
    strike_rate: "",
    total_balls_faced: "",
    fours: "",
    sixes: "",
    fifty: "",
    hundred: "",
    run_outs: "",
    wickets: "",
    runs_conceded: "",
    economy: "",
    maiden: "",
    over_thrown: "",
    catches_taken: "",
    match_id: "",
    player_id: "",
  });

  const submitPlayerMatchInfoHandler = async (e) => {
    e.preventDefault();
    console.log("Player Match info entered is ", state);
    await axios.post("/postPlayerMatchInfo", state);
  }; //Call Axios to Post

  const formField = [
    "total_runs_scored",
    "strike_rate",
    "total_balls_faced",
    "fours",
    "sixes",
    "fifty",
    "hundred",
    "run_outs",
    "wickets",
    "runs_conceded",
    "economy",
    "maiden",
    "over_thrown",
    "catches_taken",
    "match_id",
    "player_id",
  ];

  return (
    <div className="venueInfoForm">
      <Form>
        {formField.map((i) => {
          return (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{i}</Form.Label>
              <Form.Control
                type="number"
                placeholder={i}
                onChange={(e) => {
                  setState((prevState) => {
                    let temp_element = { ...state };
                    temp_element[i + ""] = e.target.value;
                    return temp_element;
                  });
                }}
              />
            </Form.Group>
          );
        })}

        <Button
          variant="primary"
          type="submit"
          onClick={submitPlayerMatchInfoHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PlayerMatchInfoForm;
