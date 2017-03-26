import React from 'react'
import NodeList from '../Containers/NodeList'
import AddNode from '../Containers/AddNode'

const Nodes = (props) => {
    return (
        <section>
            <h2>Nodes Section</h2>
            <NodeList />
            <AddNode />
        </section>
    );
};

export default Nodes;