import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function TaskDetailsView(props) {

  const {
    toggle,
    taskDetails,
    openTaskView,
  } = props;


  return (
    <div>
        <Modal isOpen={openTaskView} toggle={toggle}>
          <ModalHeader toggle={toggle}>{taskDetails.name}</ModalHeader>
          <ModalBody>
            {taskDetails.description}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" >Save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  );
}

export default TaskDetailsView;
