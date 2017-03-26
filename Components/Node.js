import React from 'react'

const Node = (props) => {
    return (
        <div>
            <p>{props.node.content}</p>
        </div>
    );
};

export default Node;