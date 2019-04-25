import React, { Component } from "react";

export default class GifList extends Component {
  renderGifs = () => {
    return (
      <ul>
        {this.props.gifs.map(gif => {
          return (
            <li>
              <img src={gif} />
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return <div>{this.renderGifs()}</div>;
  }
}
