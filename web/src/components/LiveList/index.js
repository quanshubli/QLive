import React, { Component } from "react";
import List from "./list";
import { Pagination, Spin } from "antd";

import "./index.scss";

class LiveList extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static defaultProps = {
    lives: {}
  }

  state = {
    current: 1,
    pageSize: 40
  }

  componentDidMount() {
    const { fetchLives } = this.props;
    const { current, pageSize } = this.state;
    fetchLives(current, pageSize);
  }

  handlePageChange(page, pageSize) {
    const { fetchLives } = this.props;
    fetchLives(page, pageSize);
    this.setState({
      current: page
    });
  }

  render() {
    const { lives, livesLoading } = this.props;
    const { current, pageSize } = this.state;
    return (
      <div>
        {
          livesLoading ?
            <Spin tip="Loading" size="large">
              <div style={{ minHeight: 500 }} />  
            </Spin>  
            :
            <List data={lives.list} />
        }
        <Pagination
          style={{ textAlign: "center" }}
          current={current}
          total={lives.count}
          pageSize={pageSize}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default LiveList;