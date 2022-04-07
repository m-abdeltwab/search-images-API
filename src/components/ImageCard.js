import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  setHeight = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setHeight);
  }

  render() {
    let { urls, description } = this.props.image;
    return (
      <div
        style={{
          gridRow: `span ${this.state.spans}`,
        }}
      >
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
