import { Component } from 'react';
import * as React from "react";
import { connect } from 'react-redux';
import SearchInput from '../SearchInput/SearchInput';
import SearchResultList from '../SearchResultList/SearchResultList';
import * as actions from '../../actions/searchReposActions';
import * as types from '../../types';

interface GithubSearchType {
  dispatch(action: types.ActionType): types.ActionType
}

class GithubSearch extends Component<GithubSearchType> {
  inner: Node;

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), false);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), false);
  }

  handleClickOutside(event: { target: HTMLInputElement; }) {
    if (!this.inner.contains(event.target)) this.props.dispatch(actions.unfocusSearchInput());
  }

  render() {
    return <div className='github-search'>
      <div className='github-search__inner'
        ref={(node) => { this.inner = node; }}>
        <SearchInput />
        <SearchResultList />
      </div>
    </div>;
  }
}

function mapStateToProps(store: types.StoreType) {
  return store;
}

export default connect(mapStateToProps)(GithubSearch);
