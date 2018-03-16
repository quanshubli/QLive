import React from "react";
import { connect } from "react-redux";

import SortList from "../components/SortList";

const mapStateToProps = (state) => {
  const { sorts } = state;
  return {
    sorts
  };
};

const SortsContainer = connect(mapStateToProps)(SortList);

export default SortsContainer;