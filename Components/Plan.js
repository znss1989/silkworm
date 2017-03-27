import React from 'react'

class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        
    }
    onEnableEditPlan() {
        this.setState({
            isEditing: true
        });
    }
    onCancelEditPlan() {
        // const editPlanForm = document.getElementById(this.props.plan.planID+"-edit");
        // editPlanForm.elements["plan-title"].value = this.props.plan.title;
        // editPlanForm.elements["plan-brief"].value = this.props.plan.brief;
        this.setState({
            isEditing: false
        });
    }
    render() {
        return (
            <div>
                <h3 style={{textDecoration: this.props.plan.status ? 'line-through': 'none'}}>{this.props.plan.title}</h3>
                <p>{this.props.plan.brief}</p>
                <button onClick={() => this.onEnableEditPlan()}>Edit</button>
                {this.state.isEditing &&
                    <form id={this.props.plan.planID+"-edit"} onSubmit={
                        (event) => {
                            event.preventDefault();
                            const editPlanForm = document.getElementById(this.props.plan.planID+"-edit");
                            let title = editPlanForm.elements["plan-title"].value.trim();
                            let brief = editPlanForm.elements["plan-brief"].value;
                            if (!title) {
                                return;
                            }
                            this.props.onEditPlan(this.props.plan.planID, title, brief);
                            editPlanForm.elements["plan-title"].value = "";
                            editPlanForm.elements["plan-brief"].value = "";
                            this.setState({
                                isEditing: false
                            });
                        }
                    }>
                        <label>
                            Title
                            <input type="text" name="plan-title" />
                        </label>
                        <label>
                            Brief (Optional)
                            <input type="text" name="plan-brief" placeholder="Generally talk about this plan..." />
                        </label>
                        <button type="submit">Edit plan</button>
                        <button onClick={() => this.onCancelEditPlan()}>Cancel</button>
                    </form>
                }
                <button onClick={() => this.props.onSelect(this.props.plan.planID)}>Select</button>
                <button onClick={() => this.props.onToggleStatus(this.props.plan.planID)}>Toggle</button>
                <button onClick={() => this.props.onDelete(this.props.plan.planID)}>Delete</button>
            </div>
        );        
    }
}

export default Plan;