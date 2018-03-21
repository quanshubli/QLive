import React from "react";
import { connect } from "react-redux";

import LiveList from "../components/LiveList";
import { fetchLives } from "../model/actions";

const mapStateToProps = state => {
  const { lives } = state;
  return {
    lives
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLives: () => {
      dispatch(fetchLives());
    }
  }
};

const LivesContainer = connect(mapStateToProps, mapDispatchToProps)(LiveList);

export default LivesContainer;