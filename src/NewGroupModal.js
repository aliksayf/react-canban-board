import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function NewGroupModal(props) {

    const {
        taskList,
        setTaskList,
        taskGroup,
        setTaskGroup,
        newGroupModal,
        setNewGroupModal
    } = props;

    const [newGroupName, setNewGroupName] = useState('');
    const [submitActive, setSubmitActive] = useState(false)

    const inputGroupName = (name) => {
            setNewGroupName(name);
        if (name.length > 0) {
            setSubmitActive(true)
        }else setSubmitActive(false)
    };


    const saveNewGroup = () => {
        const newTemp = {...taskGroup};
        const newTask = [...taskList];
        newTask.push([]);
        newTemp.status.push(newGroupName);
        newTemp.colors.push('secondary');
        setTaskGroup({...newTemp});
        setTaskList(newTask);
        toggle();
    };

    const toggle = () => {
        setNewGroupName('');
        setNewGroupModal(!newGroupModal);
        setSubmitActive(false)
    };

    return (
        <div>
            <Modal isOpen={newGroupModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create new group</ModalHeader>
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
                                    value={newGroupName}
                                    onChange={(e) => inputGroupName(e.target.value)}/>
                            </Col>
                        </FormGroup>
                        {/*<FormGroup row>*/}
                        {/*    <Col sm="2">*/}
                        {/*        <Label className="float-right">Priority</Label>*/}
                        {/*    </Col>*/}
                        {/*    <Col sm="2">*/}
                        {/*        <Input type="select" name="select" id="exampleSelect"*/}
                        {/*               onChange={(e) => selectPriority(e.target.value)}>*/}
                        {/*            <option>Low</option>*/}
                        {/*            <option>Mid</option>*/}
                        {/*            <option>High</option>*/}
                        {/*            >*/}
                        {/*        </Input>*/}
                        {/*    </Col>*/}
                        {/*</FormGroup>*/}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveNewGroup} disabled={!submitActive}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewGroupModal;
