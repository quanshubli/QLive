import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import SortItem from "../SortItem";

const SortList = (props) => {
  const { sorts } = props;
  return (
    <ul className="sort-list">
      {
        sorts.map((item, index) => (
          <li key={`${index}-${item.id}`}>
            <SortItem sort={item} />
          </li>
        ))
      }
    </ul>
  );
};
SortList.defaultProps = {
  sorts: []
};

export default SortList;