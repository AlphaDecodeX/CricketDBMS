import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VenueInfoForm from "../components/VenueInfoForm";

const VenueInfo = (props) => {
  return (
    <Modal show={props.isVenueInfoOpen} onHide={props.closeVenueInfoModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Venue Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VenueInfoForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeVenueInfoModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VenueInfo;
