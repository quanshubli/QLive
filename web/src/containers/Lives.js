import React from "react";
import { connect } from "react-redux";

import LiveList from "../components/LiveList";
import { fetchLives } from "../model/actions";

const mapStateToProps = state => {
  const { lives, livesLoading } = state;
  return {
    lives,
    livesLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLives: (page, pageSize, sort) => {
      dispatch(fetchLives(page, pageSize, sort));
    }
  }
};

const LivesContainer = connect(mapStateToProps, mapDispatchToProps)(LiveList);

export default LivesContainer;