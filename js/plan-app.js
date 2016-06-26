'use strict';

// Plan header
var PlanTitle = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Silkworm</h3>
                <h5>{this.props.title}</h5>
            </div>
        );
    }
});

var UserPanel = React.createClass({
    render: function() {
        return (
            <div>
                <img src="#" alt="user-photo"/>
                <p>Log out</p>
            </div>
        );
    }
});

var PlanHeader = React.createClass({
    render: function() {
        return (
            <div>
                <PlanTitle title={this.props.title}/>
                <UserPanel />
            </div>);
    }
});

ReactDOM.render(
    <PlanHeader title="Travel around">
        <PlanTitle />
    </PlanHeader>,
    document.getElementById('plan-header')
);

// Plan container
/*
    Add new node
        Add handler
        Display input
        Create new node
        Refresh plan list
        Update database
    Delete node
*/
var data = [
    {id: 0, title: "Book a plane ticket to Paris"},
    {id: 1, title: "Take flight from Chengdu"},
    {id: 2, title: "Take a shuttle bus to Versailles"}
];

var StartNode = React.createClass({
    render: function() {
        return (
            <div className="plan-start">
                <img src="#" alt="plan-start" />
                <span>+</span>
            </div>
        );
    }
});

var PlanNode = React.createClass({
    getInitialState: function() {
        return {
            tempformId: this.props.tempformId,
            showTempform: false
        };
    },
    handleAdd: function () {
        console.log("Adding new node...");
        this.setState({tempformId: this.props.id})
        console.log("tempformId at this node is" + this.state.tempformId);
        this.setState({showTempform: !this.state.showTempform});
        this.props.callbackParent(this.state.tempformId);
    },
    handleDelete: function() {
        console.log("Node deleted.");
    },
    render: function() {
        // var nodeId = this.props.id;
        // showTempform = (nodeId === this.state.tempformId);
        var tempform = ((this.props.id === this.state.tempformId) && this.state.showTempform) ? (
            <div className="temp-node">
                <form>
                    <input type="text" placeholder="A new step of task..." />
                    <input type="submit" value="post" />
                </form>
            </div>
        ) : null;
        return (
            <div className="plan-node" id={"node-" + this.props.id}>
                <div className="node-front">!!!front</div>
                <div className="node-status">
                    <input type="checkbox"/>
                </div>
                <div className="node-title">
                    <p>{this.props.children.toString()}</p>
                </div>
                <div className="add-delete">
                    <a onClick={this.handleAdd}><span>+</span></a>
                    <a onClick={this.handleDelete}><span>-</span></a>
                </div>
                {tempform}
                <div className="node-rear">rear!!!</div>
            </div>
        );
    }
});

var EndNode = React.createClass({
    render: function() {
        return (
            <div className="plan-end">
                <img src="#" alt="plan-end" />
            </div>
        );
    }
});

var PlanList = React.createClass({
    getInitialState: function() {
        return {
            tempformId: -1
        };
    },
    onNodeTempformIdChange: function(newTempformId) {
        this.setState({tempformId: newTempformId});
        console.log(this.state.tempformId);
    },
    render: function() {
        var self = this;
        var planNodes = this.props.data.map(function(node) {
            return (
                <PlanNode id={node.id} tempformId={self.state.tempformId} callbackParent={self.onNodeTempformIdChange}>
                    {node.title}
                </PlanNode>
            );
        });
        return (
            <div className="node-list">
                <StartNode />
                {planNodes}
                <EndNode />
            </div>
        );
    }
});

ReactDOM.render(
    <PlanList data={data} />,
    document.getElementById('plan-container')
);