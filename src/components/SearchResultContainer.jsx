import React, { Component } from 'react';
import API from '../utils/API';

class SearchResultContainer extends Component {
  state = {
    search: '',
    results: []
  };

  componentDidMount() {
    this.searchApi();
  }
  searchApi = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return <h1>Test</h1>;
  }
}
export default SearchResultContainer;
