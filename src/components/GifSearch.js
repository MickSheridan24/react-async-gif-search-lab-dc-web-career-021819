import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
