import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminHome.css";
import { useState } from "react";
import Person from "./Person";
import MatchInfo from "./MatchInfo";
import VenueInfo from "./VenueInfo";
import PlayerMatchInfo from "./PlayerMatchInfo";
import HomePage from "./HomePage";

const AdminHome = () => {
  const [state, setState] = useState({
    isPersonOpen: false,
    isMatchInfoOpen: false,
    isVenueInfoOpen: false,
    isPlayerMatchInfoOpen: false,
  });

  const openPersonModal = () => setState({ isPersonOpen: true });
  const closePersonModal = () => setState({ isPersonOpen: false });

  const openMatchInfoModal = () => setState({ isMatchInfoOpen: true });
  const closeMatchInfoModal = () => setState({ isMatchInfoOpen: false });

  const openVenueInfoModal = () => setState({ isVenueInfoOpen: true });
  const closeVenueInfoModal = () => setState({ isVenueInfoOpen: false });

  const openPlayerMatchInfoModal = () =>
    setState({ isPlayerMatchInfoOpen: true });
  const closePlayerMatchInfoModal = () =>
    setState({ isPlayerMatchInfoOpen: false });

  return (
    <>
      <div className="adminFormButtons">
        <Person
          isPersonOpen={state.isPersonOpen}
          closePersonModal={closePersonModal}
        />
        <Button className="button" variant="primary" onClick={openPersonModal}>
          Person
        </Button>{" "}
        <MatchInfo
          isMatchInfoOpen={state.isMatchInfoOpen}
          closeMatchInfoModal={closeMatchInfoModal}
        />
        <Button
          className="button"
          variant="secondary"
          onClick={openMatchInfoModal}
        >
          Match Info
        </Button>{" "}
        <VenueInfo
          isVenueInfoOpen={state.isVenueInfoOpen}
          closeVenueInfoModal={closeVenueInfoModal}
        />
        <Button
          className="button"
          variant="success"
          onClick={openVenueInfoModal}
        >
          Venue Info
        </Button>{" "}
        <PlayerMatchInfo
          isPlayerMatchInfoOpen={state.isPlayerMatchInfoOpen}
          closePlayerMatchInfoModal={closePlayerMatchInfoModal}
        />
        <Button
          className="button"
          variant="warning"
          onClick={openPlayerMatchInfoModal}
        >
          Player Match Info
        </Button>{" "}
      </div>

      <div className="adminHomePage">
        <HomePage />
      </div>
    </>
  );
};

export default AdminHome;
