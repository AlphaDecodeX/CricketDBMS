import { Card, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "./Axios.js";

const HomePage = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);
  const [matchId, setMatchId] = useState();
  const [matchInfo, setMatchInfo] = useState();
  const [playerInfo, setPlayerInfo] = useState({
    id: "",
    name: "",
    p_role: "",
    state: "",
    strike_rate: "",
    tot_wickets: "",
    total_matches: "",
    "4s": "",
    "6s": "",
    "50s": "",
    "100s": "",
    Bat_Avg: "",
    Career_runs: "",
    catches: "",
    category: "",
    debut_date: "",
    dob: "",
    economy: "",
    format: "",
  });

  const [playerData, setPlayerData] = useState(null);

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(playerData);
  }, [playerData]);

  const idChangeHandler = (e) => {
    setMatchId(e.target.value);
  };
  const getMatchData = (e) => {
    e.preventDefault();
    console.log("id send is =>", matchId);

    const data = axios.get("http://localhost:5001/matchinfo", {
      params: { matchId: matchId },
    });
    data
      .then((res) => {
        setMatchInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    console.log("name send is =>", name);

    await axios
      .get("http://localhost:5001/getPersonData", {
        params: { name: name },
      })
      .then((res) => {
        console.log("data is", res.data);
        setPlayerData(res.data);
      })
      .catch((e) => {
        console.log("Eror is ", e);
      });

    // data
    //   .then();
    setFlag(!flag);
  };

  return (
    <div className="mainHomePage">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>player Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player name"
              onChange={nameChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Match ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Match ID"
              onChange={idChangeHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitFormHandler}>
            get player data
          </Button>
          <br></br>
          <br></br>

          <Button variant="primary" type="submit" onClick={getMatchData}>
            get match data;
          </Button>
        </Form>
      </div>
      <br />
      <div className="playerCardShow">
        {playerData
          ? playerData.map((playerData) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{playerData.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {playerData.p_role}
                    </Card.Subtitle>
                    <Card.Text>
                      Indian Cricket Team {playerData.p_role}
                    </Card.Text>
                    <Card.Text>{playerData.format}</Card.Text>
                    {/* <Button
                      onClick={() => {
                        setPlayerInfo(!playerInfo);
                      }}
                    >
                      View Stats
                    </Button> */}
                    <Button
                      onClick={async () => {
                        await axios.post("/deletePlayer", {
                          name: playerData.name,
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
      <div>
        {matchInfo ? (
          <Table striped bordered hover className="matchTable">
            <thead>
              <tr>
                <th>Location</th>
                <th>Stadium Name</th>
                <th>Oppponent team</th>
                <th>Winner</th>
                <th>Format</th>
                <th>India's Run</th>
                <th>Opponent's Run</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{matchInfo.location}</td>
                <td>{matchInfo.stadium_name}</td>
                <td>{matchInfo.opponent_team}</td>
                <td>{matchInfo.winner}</td>
                <td>{matchInfo.format}</td>
                <td>{matchInfo.india_total_runs}</td>
                <td>{matchInfo.opponent_total_run}</td>
              </tr>
            </tbody>
          </Table>
        ) : null}

        <div>
          {flag
            ? playerData.map((e) => {
                return (
                  <Table>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Debut Date</th>
                        <th>DOB</th>
                        <th>P_Role</th>
                        <th>State</th>
                        <th>strike_rate</th>
                        <th>Total Wickets</th>
                        <th>Total Matches</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>50s</th>
                        <th>100s</th>
                        <th>Bat average</th>
                        <th>Career Runs</th>
                        <th>catches</th>
                        <th>Economy</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.category}</td>
                        <td>{e.debut_date}</td>
                        <td>{e.dob}</td>
                        <td>{e.p_role}</td>
                        <td>{e.state}</td>
                        <td>{e.strike_rate}</td>
                        <td>{e.tot_wickets}</td>
                        <td>{e.total_matches}</td>
                        <td>{e.fours}</td>
                        <td>{e.sixes}</td>
                        <td>{e.fifties}</td>
                        <td>{e.hundreds}</td>
                        <td>{e.Bat_Avg}</td>
                        <td>{e.Career_runs}</td>
                        <td>{e.catches}</td>
                        <td>{e.economy}</td>
                        <td>{e.format}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
