import React from 'react'

const Node = (props) => {
    return (
        <div>
            <p style={{textDecoration: props.node.status ? 'line-through': 'none'}}>{props.node.content}</p>
            {/*<p>{props.node.content}</p>*/}
            <button onClick={() => props.onToggleStatus(props.node.nodeID)}>Toggle</button>
            <button onClick={() => props.onDelete(props.node.nodeID)}>Remove</button>
        </div>
    );
}

export default Node;