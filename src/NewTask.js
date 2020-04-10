import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Alert
} from 'reactstrap';
import Badge from "reactstrap/es/Badge";

function NewTask(props) {

    const {
        toggleNewTask,
        modal,
    } = props;

    const emptyFields = {name: '', description: '', priority: 'Low'}
    const [newTaskValues, setNewTaskValues] = useState(emptyFields);
    const [submitActive, setSubmitActive] = useState(false)

    const inputTaskName = (name) => {
        setNewTaskValues({...newTaskValues, name: name});
        if(newTaskValues.name && newTaskValues.description) {
            setSubmitActive(true)
        }
    };

    const inputTaskDescription = (text) => {
        setNewTaskValues({...newTaskValues, description: text});
        if(newTaskValues.name && newTaskValues.description) {
            setSubmitActive(true)
        }
    };

    const saveNewTask = () => {
        props.addNewTask({...newTaskValues, status: 1, id: Math.random()});
        setNewTaskValues(emptyFields);
    };

    const toggle = () => {
        setNewTaskValues(emptyFields);
        toggleNewTask();
    };

    const selectPriority = (value)  => {
        setNewTaskValues({...newTaskValues, priority: value});
        console.log(newTaskValues)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
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
                                    value={newTaskValues.name}
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
                                    placeholder={newTaskValues.description}
                                    onChange={(e) => inputTaskDescription(e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="2">
                                <Label className="float-right">Priority</Label>
                            </Col>
                            <Col sm="2">
                                <Input type="select" name="select" id="exampleSelect" onChange={(e)=>selectPriority(e.target.value)}>
                                    <option>Low</option>
                                    <option>Mid</option>
                                    <option>High</option>>
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
