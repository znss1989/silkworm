import React from 'react'
import Node from './Node'

const NodeListView = (props) => {
    return (
        <ul>
            {props.nodeList.map((node, index) => {
                return (<Node key={node.nodeID} node={node} />);
            })}
        </ul>
    );
};

export default NodeListView;