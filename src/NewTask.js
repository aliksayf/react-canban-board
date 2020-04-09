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
    FormText,
    Col
} from 'reactstrap';

function NewTask(props) {

    const [newTaskValues, setNewTaskValues] = useState({});

    const {
        toggle,
        modal
    } = props;

    const inputTaskName = () => {

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
                                <Input type="test" name="title"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="2">
                                <Label for="exampleText">Description</Label>
                            </Col>
                            <Col>
                                <Input type="textarea" name="text" id="exampleText"/>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewTask;
