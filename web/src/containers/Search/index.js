import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByKeyword } from '../../model/actions';

import Container from '../../components/Container';
import SortList from '../../components/SortList';
import LivesList from '../../components/LiveList';

const promptStyle = {
  padding: '30px 0',
  textAlign: 'center'
};

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match, dispatch } = this.props;
    const keyword = match.params.keyword;
    dispatch(fetchByKeyword(keyword));
  }

  render() {
    const { search } = this.props;
    const { sorts, lives } = search;
    return (
      <Container width={1100}>
        <p className='all-title'>相关分类</p>
        {
          sorts.length > 0 ?
            <SortList sorts={sorts} />
            :
            <div style={promptStyle}>暂无相关分类</div>
        }
        <p className='all-title'>相关直播间</p>
        {
          lives.length > 0 ?
            <LivesList lives={lives} />
            :
            <div style={promptStyle}>暂无相关直播间</div>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { search } = state;
  return {
    search
  };
};

export default connect(mapStateToProps)(Search);