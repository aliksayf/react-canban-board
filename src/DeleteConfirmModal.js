import React, { useState } from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function DeleteConfirmModal(props) {

  const {
    removeTask,
    openDeleteConfirm,
    toggleDeleteConfirm
  } = props;

  const deleteButtonHandler = () => {
    removeTask();
    toggleDeleteConfirm();
  }


  return (
    <div>
        <Modal isOpen={openDeleteConfirm} toggle={toggleDeleteConfirm}>
          <ModalHeader toggle={toggleDeleteConfirm}>Are you sure?</ModalHeader>
          <ModalBody>
            Do you really want to delete this task?
            This process cannot be undone.
          </ModalBody>
          <ModalFooter row>
            <Button color="primary" onClick={deleteButtonHandler}>Delete</Button>{' '}
            <Button color="secondary" onClick={toggleDeleteConfirm}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  );
}

export default DeleteConfirmModal;
