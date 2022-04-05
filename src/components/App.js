import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  searchSubmit = async (term) => {
    let response = await unsplash.get("/search/photos", {
      params: { query: { term } },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ padding: "20px" }}>
        <SearchBar formSubmit={this.searchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
