import { Component } from 'react';
import * as React from "react";
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import * as actions from '../../actions/searchReposActions';
import * as types from '../../types';

interface SearchInputType {
  dispatch(action: types.ActionType): types.ActionType
  isLoading: boolean
}

class SearchInput extends Component<SearchInputType> {
  handleChange: (text: string) => void

  constructor(props: SearchInputType) {
    super(props);
    this.debounceHandleChange.bind(this);
    this.debounceHandleChange();
  }

  debounceHandleChange() {
    this.handleChange = debounce((text: string) => {
      if (text === '') {
        this.props.dispatch(actions.requestReposError());
        return;
      }
      this.props.dispatch(actions.requestRepos(text));
    }, 300);
  }

  render() {
    return <div className='search-input'>
      <input className='search-input__input'
        placeholder='Название репозитория'
        onChange={(event) =>this.handleChange(event.target.value)}
        onFocus={() => this.props.dispatch(actions.focusSearchInput())} />
      <img src='/assets/img/loader-icon.gif'
        className={`search-input__load-icon ${this.props.isLoading ? 'search-input__load-icon_active' : ''}`}></img>
    </div>;
  }
}

function mapStateToProps(store: types.StoreType) {
  return {
    isLoading: store.isLoading,
  }
}

export default connect(mapStateToProps)(SearchInput);
