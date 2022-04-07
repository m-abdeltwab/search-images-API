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
          <div className="ui segment fluid icon input">
            <input
              value={this.state.term}
              className="inputField"
              type="text"
              placeholder="Image Search..."
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
