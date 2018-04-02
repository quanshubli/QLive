import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSorts } from "../../model/actions";

import Container from "../../components/Container";
import SortList from "../../components/SortList";

class AllSorts extends Component {
  constructor(props) {
    super();
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
      <Container width={1100}>
        <p className="all-title">全部分类</p>
        <SortList sorts={sorts.list} />
      </Container>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AllSorts);