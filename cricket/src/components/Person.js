import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonForm from "../components/PersonForm";

const Person = (props) => {
  return (
    <Modal show={props.isPersonOpen} onHide={props.closePersonModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PersonForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Person;
