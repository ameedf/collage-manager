import React, { Component } from 'react';
import { connect } from 'react-redux';
import { studentRemoved } from '../bl/actionsCreators';

class SingleStudent extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.grade}</td>
        <td><button onClick={() => this.props.handleRemove(this.props.index)}>Remove</button></td>
      </tr>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  student: state.students[ownProps.index],
});


const mapDispatchToProps = dispatch => ({
  handleRemove: (i) => dispatch(studentRemoved(i)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);