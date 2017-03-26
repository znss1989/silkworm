import React from 'react'

const Node = (props) => {
    return (
        <div>
            <p>{props.node.content}</p>
            <button onClick={() => props.onDelete(props.node.nodeID)}>Remove</button>
        </div>
    );
};

export default Node;