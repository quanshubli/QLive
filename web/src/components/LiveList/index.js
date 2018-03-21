import React, { Component } from "react";

import "./index.scss";

const LiveItem = ({ style, data }) => {
  return (
    <a className="live-item" href={data.href} target="_blank">
      <div className="picture" style={{
        backgroundImage: `url(${data.picture})`
      }}></div>
      <div className="info">
        <div className="line">
          <p title={data.name}>{data.name}</p>
          <span>{data.sort_cname}</span>
        </div>
        <div className="line">
          <p>{data.nickname}</p>
          <span>{data.person_num}</span>
        </div>
      </div>
    </a>
  );
};
LiveItem.defaultProps = {
  data: {}
};

class LiveList extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    lives: []
  }

  componentDidMount() {
    const { getLives } = this.props;
    getLives();
  }

  render() {
    const { lives, history } = this.props;
    return (
      <ul className="live-list">
        {
          lives.map((item, index) => (
            <li key={`${item.room_id}`}>
              <LiveItem data={item} history={history} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default LiveList;