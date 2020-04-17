import React, {useState} from 'react';
import {Button, Col, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import GroupItem from "./GroupItem";

function ManageGroupsModal(props) {

    const {
        taskList,
        setTaskList,
        taskGroup,
        setTaskGroup,
        newGroupModal,
        setNewGroupModal,
        manageModal,
        setManageModal
    } = props;



    const toggle = () => {
        setManageModal(!manageModal);
    };

    return (
        <div>
            <Modal isOpen={manageModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Manage groups</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {taskGroup.status.map(( el, i )=>
                            <GroupItem key={i} el={el} color={taskGroup.colors[i]}/>
                        )}
                     </ListGroup>
                </ModalBody>
                <ModalFooter>
                    {/*<Button color="primary" onClick={saveNewGroup} disabled={!submitActive}>Create</Button>{' '}*/}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ManageGroupsModal;
