import React from "react";
import { connect } from "react-redux";

import LiveList from "../components/LiveList";

const mapStateToProps = state => {
  const { lives } = state;
  return {
    lives
  };
};

const LivesContainer = connect(mapStateToProps)(LiveList);

export default LivesContainer;