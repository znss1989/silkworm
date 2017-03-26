import React from 'react'

const AddNodeView = (props) => {
    return (
        <div>
            <form id="new-node-form" onSubmit={
                (event) => {
                    const newNodeForm = document.getElementById('new-node-form');
                    event.preventDefault();
                    let content = newNodeForm.elements["node-content"].value.trim();
                    if (!content) {
                        return;
                    }
                    props.onNodeSubmit(content);
                    newNodeForm.elements["node-content"].value = "";
                }
            }>
                <label>
                    Content
                    <input type="text" name="node-content" required />
                </label>
                <button type="submit">Add New Node</button>
            </form>
        </div>
    );
};

export default AddNodeView;