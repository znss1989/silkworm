import React from 'react'

const AddPlanView = (props) => {
    return (
        <div>
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    let title = this.elements["plan-title"].value.trim();
                    let brief = this.elements["plan-brief"].value;
                    if (!title) {
                        return;
                    }
                    props.onPlanSubmit(title, brief);
                    this.elements["plan-title"].value = "";
                    this.elements["plan-brief"].value = "";
                }
            }>
                <label>
                    Title
                    <input type="text" name="plan-title" required />
                </label>
                <label>
                    Brief (Optional)
                    <input type="text" name="plan-brief" placeholder="Generally talk about this plan..." />
                </label>
                <button type="submit">Add New Plan</button>
            </form>
        </div>
    );
};

export default AddPlanView;

/*<form>
  <fieldset class="account-info">
    <label>
      Username
      <input type="text" name="username">
    </label>
    <label>
      Password
      <input type="password" name="password">
    </label>
  </fieldset>
  <fieldset class="account-action">
    <input class="btn" type="submit" name="submit" value="Login">
    <label>
      <input type="checkbox" name="remember"> Stay signed in
    </label>
  </fieldset>
</form>*/


/*<div>
    <form onSubmit={e => {
    e.preventDefault()
    if (!input.value.trim()) {
        return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
    }}>
    <input ref={node => {
        input = node;
    }} />
    <button type="submit">
        Add Todo
    </button>
    </form>
</div>*/