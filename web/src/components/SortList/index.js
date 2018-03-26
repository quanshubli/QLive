import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SortItem = ({ data }) => {
  return (
    <Link className="sort-item" to={`/lives/${data.name}`}>
      <div className="picture" style={{
        backgroundImage: `url(${data.picture})`
      }}></div>
      <p>{data.name}</p>
    </Link>
  );
};

class SortList extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    sorts: {
      count: 0,
      list: []
    }
  }

  componentDidMount() {
    const { fetchSorts } = this.props;
    fetchSorts();
  }

  render() {
    const { sorts } = this.props;
    return (
      <ul className="sort-list">
        {
          sorts.list.map((item, index) => (
            <li key={`${index}-${item.id}`}>
              <SortItem data={item} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default SortList;