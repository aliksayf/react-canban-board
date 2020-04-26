import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function NewTask(props) {

    const {
        taskDetails,
        setTaskDetails,
        toggleNewTask,
        modal,
    } = props;

    const emptyFields = {name: '', description: '', priority: 'Low'}
    const [newTaskValues, setNewTaskValues] = useState(emptyFields);
    const [submitActive, setSubmitActive] = useState(false)

    const inputTaskName = (name) => {
        setTaskDetails({...taskDetails, name: name});
        if (taskDetails.name && taskDetails.description) {
            setSubmitActive(true)
        }
    };

    const inputTaskDescription = (text) => {
        setTaskDetails({...taskDetails, description: text});
        if (taskDetails.name && taskDetails.description) {
            setSubmitActive(true)
        }
    };

    const saveNewTask = () => {
        props.addNewTask({...taskDetails, status: 1, id: Math.random()});
        setTaskDetails(emptyFields);
    };

    const toggle = () => {
        setTaskDetails(emptyFields);
        toggleNewTask();
    };

    const selectPriority = (value) => {
        setTaskDetails({...taskDetails, priority: value});
        console.log(taskDetails)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className=' modal-big'>
                <ModalHeader toggle={toggle}>Create new task</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm="2">
                                <Label className="float-right">Title</Label>
                            </Col>
                            <Col>
                                <Input
                                    type="test"
                                    name="title"
                                    value={taskDetails.name}
                                    onChange={(e) => inputTaskName(e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="2">
                                <Label className="float-right">Description</Label>
                            </Col>
                            <Col>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="exampleText"
                                    placeholder={taskDetails.description}
                                    onChange={(e) => inputTaskDescription(e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="2">
                                <Label className="float-right">Priority</Label>
                            </Col>
                            <Col sm="2">
                                <Input type="select" name="select" id="exampleSelect"
                                       onChange={(e) => selectPriority(e.target.value)}>
                                    <option>Low</option>
                                    <option>Mid</option>
                                    <option>High</option>
                                    >
                                </Input>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveNewTask} disabled={!submitActive}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewTask;
