import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function TaskDetailsView(props) {

  const {
    toggle,
    changeTaskValues,
    toggleDeleteConfirm,
    taskDetails,
    setTaskDetails,
    openTaskView,
  } = props;

  const [editDisabled, setEditDisabled] = useState(true);
  // const [taskValues, setTaskValues] = useState({...props.taskDetails});

  const inputNameHandler = (val) => {
    setTaskDetails({...taskDetails, name : val })
  };

  const inputDescrHandler = (val) => {
    setTaskDetails({...taskDetails, description : val })
  };

  const inputPriorHandler = (val) => {
    setTaskDetails({...taskDetails, priority : val })
  };

  const inputEditHandler = () => {
    editDisabled ? setEditDisabled(false) : (changeCurrentTask());
  };

  const changeCurrentTask = () => {
    changeTaskValues(taskDetails);
    setEditDisabled(true);
    toggle();
  };

  const deleteButtonHandler = () => {
    toggleDeleteConfirm();
    toggle();
  }


  return (
    <div>
        <Modal isOpen={openTaskView} toggle={toggle} className=' modal-big'>
          <ModalHeader toggle={toggle}>Task details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col sm="2">
                  <Label className="float-right">Title</Label>
                </Col>
                <Col>
                  <Input
                      disabled={editDisabled}
                      type="test"
                      name="title"
                      value={taskDetails.name}
                      onChange={(e) => inputNameHandler(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="2">
                  <Label className="float-right" >Description</Label>
                </Col>
                <Col>
                  <Input
                      disabled={editDisabled}
                      value={taskDetails.description}
                      type="textarea"
                      name="text"
                      id="exampleText"
                      onChange={(e) => inputDescrHandler(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm="2">
                  <Label className="float-right">Priority</Label>
                </Col>
                <Col sm="2">
                  <Input type="select" disabled={editDisabled} id="exampleSelect"
                         value={taskDetails.priority}
                         onChange={(e)=>inputPriorHandler(e.target.value)}
                  >
                    <option>Low</option>
                    <option>Mid</option>
                    <option>High</option>>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter row>
            <Col>
            <Button color="danger" className="float-left" onClick={deleteButtonHandler}>Delete Task</Button>
            </Col>
            <Button color="primary" onClick={inputEditHandler}>{editDisabled ? 'Edit': 'Save'}</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  );
}

export default TaskDetailsView;
