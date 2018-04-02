import React from "react";

import "./index.scss";

const LiveItem = ({ live }) => {
  return (
    <a className="live-item" href={live.href} target="_blank">
      <div className="picture" style={{
        backgroundImage: `url(${live.picture})`
      }}></div>
      <div className="info">
        <div className="line">
          <p title={live.name}>{live.name}</p>
          <span>{live.sort_cname}</span>
        </div>
        <div className="line">
          <p>{live.nickname}</p>
          <span>{live.person_num}</span>
        </div>
      </div>
    </a>
  );
};
LiveItem.defaultProps = {
  live: {}
};

export default LiveItem;