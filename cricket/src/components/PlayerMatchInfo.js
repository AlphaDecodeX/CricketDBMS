import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerMatchInfoForm from "../components/PlayerMatchInfoForm";

const VenueInfo = (props) => {
  return (
    <Modal
      show={props.isPlayerMatchInfoOpen}
      onHide={props.closePlayerMatchInfoModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Player Match Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PlayerMatchInfoForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closePlayerMatchInfoModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VenueInfo;
