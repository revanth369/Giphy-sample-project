import React from "react";

const GiphyItem = ({ gif, onClick }) => {
  const imgSrc = gif.images.fixed_height_still.url;
  return (
    <div className="each-gif-container" onClick={() => onClick(gif)}>
      <img src={imgSrc} alt={gif.title} className="gif-thumbnail"/>
    </div>
  );
};

export default GiphyItem;
