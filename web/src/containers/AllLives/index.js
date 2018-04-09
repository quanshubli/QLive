import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLives } from "../../model/actions";

import Container from "../../components/Container";
import LiveList from "../../components/LiveList";
import { Pagination, Spin } from "antd";

import "./index.scss";

class AllLives extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  state = {
    current: 1,
    pageSize: 40
  }

  componentDidMount() {
    const { fetchLives, match } = this.props;
    const { current, pageSize } = this.state;
    const { sort } = match.params;
    fetchLives(current, pageSize, sort);
  }

  handlePageChange(page, pageSize) {
    const { fetchLives, match } = this.props;
    const { sort } = match.params;
    fetchLives(page, pageSize, sort);
    this.setState({
      current: page
    });
  }

  render() {
    const { lives, livesLoading, match } = this.props;
    const { current, pageSize } = this.state;
    return (
      <Container width={1100}>
        <p className="all-title">{match.params.sort || '全部直播'}</p>
        {
          livesLoading ?
            <Spin tip="Loading" size="large">
              <div style={{ minHeight: 500 }} />
            </Spin>
            :
            <LiveList lives={lives.list} />
        }
        <Pagination
          style={{ textAlign: "center" }}
          current={current}
          total={lives.count}
          pageSize={pageSize}
          onChange={this.handlePageChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { lives, livesLoading } = state;
  return {
    lives,
    livesLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLives: (page, pageSize, sort) => {
      dispatch(fetchLives(page, pageSize, sort));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLives);