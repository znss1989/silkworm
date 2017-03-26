import React from 'react'
import {connect} from 'react-redux'
import ActionCreators from '../Actions/ActionCreators'
import AddNodeView from '../Components/AddNodeView'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
      onNodeSubmit: (content) => {
          dispatch(ActionCreators.createNode(content));
      }
  }
};

const AddNode = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNodeView);

export default AddNode;