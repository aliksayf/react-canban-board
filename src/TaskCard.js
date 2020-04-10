import React from 'react';
import { ListGroupItem, Button, Label, Row, Col, Badge } from "reactstrap";

const TaskCard = (props) => {

    const {
        task,
        idx,
        openTask
    } = props;

    const leftButtonDisplays = (i) => i === 0 ? ' hidden' : '';
    const rightButtonDisplays = (i) => i === 3 ? ' hidden' : '';


    return (
        <div>
            <ListGroupItem color="secondary">
                <Row>
                    <Label className="pointer" onClick={() => openTask({...task})}>{task.name}</Label>
                </Row>
                <Row>
                    <Col>
                        {/*<Button size="sm" className={leftButtonDisplays(idx)}>◄</Button>*/}
                        <div color="secondary" pill size="sm" className={leftButtonDisplays(idx) + ' pointer'}>◄</div>
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        <Button size="sm" className={rightButtonDisplays(idx) + " float-right"}>►</Button>
                    </Col>
                </Row>
            </ListGroupItem>
        </div>
    );
};

export default TaskCard;