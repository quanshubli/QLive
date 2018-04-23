import React from "react";

import "./index.scss";

const liveType = {
  '0': '斗鱼',
  '1': '熊猫',
  '2': '火猫'
};

const LiveItem = ({ live }) => {
  return (
    <div className="live-item">
      <a
        className="picture"
        style={{
          backgroundImage: `url(${live.picture})`
        }}
        href={live.href}
        target="_blank"
      >
        <span className='live-type'>{liveType[live.type]}</span>
        <span className='sort-name'>{live.sort_cname}</span>
      </a>
      <div className="info">
        <div className="line">
          <a href={live.href} title={live.name} target='_blank'>{live.name}</a>
          <span>{live.person_num}</span>
        </div>
        <div className="line">
          <p>{live.nickname}</p>
          <div className='follow'>关注</div>
        </div>
      </div>
    </div>
  );
};
LiveItem.defaultProps = {
  live: {}
};

export default LiveItem;