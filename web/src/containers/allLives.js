import React from "react";
import { connect } from "react-redux";

import LiveList from "../components/LiveList";

const AllLivesContainer = (props) => {
  return (
    <LiveList {...props} />
  );
};

const mapStateToProps = state => {
  const { lives } = state;
  return {
    lives
  };
};

export default connect(mapStateToProps)(AllLivesContainer);