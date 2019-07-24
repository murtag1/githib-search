import { Component } from 'react';
import * as React from "react";
import { connect } from 'react-redux';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import * as types from '../../types';

interface SearchResultListType {
  searchInputFocused: boolean
  reposList: types.RepoInfoType[]
}

class SearchResultList extends Component<SearchResultListType> {
  render() {
    return <div className={`search-result-list
    ${this.props.searchInputFocused && this.props.reposList.length > 0 ? 'search-result-list_active' : ''}`}>
      {this.props.reposList.map(item => <SearchResultItem key={item.url}
        name={item.name}
        url={item.url}
        stars={item.stars}
        watchers={item.watchers}
      />)}
    </div>;
  }
}

function mapStateToProps(store: types.StoreType) {
  return {
    reposList: store.repos,
    searchInputFocused: store.searchInputFocused,
  };
}

export default connect(mapStateToProps)(SearchResultList);
