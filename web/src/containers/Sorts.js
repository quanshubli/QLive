import React from "react";
import { connect } from "react-redux";

import { fetchSorts } from "../model/actions";
import SortList from "../components/SortList";

const mapStateToProps = (state) => {
  const { sorts } = state;
  return {
    sorts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSorts: (page, pageSize) => {
      dispatch(fetchSorts(page, pageSize));
    }
  }
};

const SortsContainer = connect(mapStateToProps, mapDispatchToProps)(SortList);

export default SortsContainer;