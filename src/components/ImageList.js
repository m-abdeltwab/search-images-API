import React from "react";

const ImageList = (props) => {
  let images = props.images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
