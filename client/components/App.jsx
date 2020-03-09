import React from 'react';
import { connect } from 'react-redux';

const App = ({ /* PROPS */ }) => {
  return (
    <div>I have rendered.</div>
  )
};

const mapStateToProps = (state) => {
  //
};

const mapDispatchToProps = (dispatch) => {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
