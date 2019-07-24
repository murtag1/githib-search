import { Component } from 'react';
import * as React from "react";

interface SearchResultItemType {
  name: string
  url: string
  stars: number
  watchers: number
}

class SearchResultItem extends Component<SearchResultItemType> {
  render() {
    return <div className='search-result-item'>
      <a target='_blank'
         rel='noreferrer noopener'
         href={this.props.url}
         className='search-result-item__link'>{this.props.name}</a>
      <div className='search-result-item__stars'>stars: {this.props.stars}</div>
      <div className='search-result-item__watchers'>watchers: {this.props.watchers}</div>
    </div>;
  }
}

export default SearchResultItem;
