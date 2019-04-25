import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }
  search = obj => {
    console.log(obj);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${obj.searchTerm}&api_key=?&rating=g`)
      .then(r => r.json())
      .then(res => {
        console.log(res);

        const gifs = res.data.slice(0, 3).map(g => g.images.original.url);
        this.setState({ gifs: gifs });
      });
  };
  render() {
    return (
      <div>
        <GifSearch search={this.search} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
