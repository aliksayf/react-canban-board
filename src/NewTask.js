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
    Col
} from 'reactstrap';

function NewTask(props) {

    const {
        toggle,
        modal,
    } = props;

    const emptyFields = {name: '', description: ''}
    const [newTaskValues, setNewTaskValues] = useState(emptyFields);

    const inputTaskName = (name) => {
        setNewTaskValues({...newTaskValues, name: name});
    };

    const inputTaskDescription = (text) => {
        setNewTaskValues({...newTaskValues, description: text});
    };

    const saveNewTask = () => {
        props.addNewTask({...newTaskValues, status: 1});
        setNewTaskValues(emptyFields);
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create new task</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col sm="2">
                                <Label for="exampleFile">Title</Label>
                            </Col>
                            <Col>
                                <Input
                                    type="test"
                                    name="title"
                                    required
                                    value={newTaskValues.name}
                                    onChange={(e) => inputTaskName(e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="2">
                                <Label for="exampleText">Description</Label>
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
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveNewTask}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewTask;
