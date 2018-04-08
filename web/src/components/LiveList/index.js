import React from "react";

import LiveItem from "../LiveItem";

import "./index.scss";

const LiveList = ({ lives }) => {
  return (
    <ul className="live-list">
      {
        lives.map((item, index) => (
          <li key={`${item.id}`}>
            <LiveItem live={item} />
          </li>
        ))
      }
    </ul>
  );
};
LiveList.defaultProps = {
  lives: []
};

export default LiveList;