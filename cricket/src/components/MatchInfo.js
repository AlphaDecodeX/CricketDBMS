import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MatchInfoForm from "../components/MatchInfoForm";

const MatchInfo = (props) => {
  return (
    <Modal show={props.isMatchInfoOpen} onHide={props.closeMatchInfoModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Match Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MatchInfoForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeMatchInfoModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MatchInfo;
