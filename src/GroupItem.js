import React, {useState} from 'react';
import { ListGroupItem } from 'reactstrap';

function GroupItem(props) {

    const {
        el,
        color
    } = props;

    return (
        <ListGroupItem color={color}>
            {el}
        </ListGroupItem>
    )
}

export default GroupItem;
