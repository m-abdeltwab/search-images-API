import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.formSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui segment fluid action input">
            <input
              value={this.state.term}
              className="inputField"
              type="text"
              placeholder="Image Search"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
