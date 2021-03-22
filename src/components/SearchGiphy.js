import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";
import GiphyItem from "./GiphyItem";
import PreviewModal from "./PreviewModal";

const SearchGiphy = () => {
  const dispatch = useDispatch();
  const [selectedGif, setSelectedGif] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { search, giphy } = useSelector(state => state);
  const { searchKeyword } = search;
  const { gifs } = giphy;

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [isModalOpen]);

  const handleSearchInput = event => {
    dispatch(actions.setSearchKeyword(event.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchKeyword) dispatch(actions.getGiphyData(searchKeyword));
  };

  const onItemClick = item => {
    setSelectedGif(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Giphy Client</h1>
      <form onSubmit={event => handleSubmit(event)}>
        {/* <div className="search-bar">
          <input
            type="text"
            className="search-bar-input"
            value={searchKeyword}
            placeholder="Search Gifs.."
            onChange={event => handleSearchInput(event)}
          />
          <input type="submit" className="btn btn-primary" value="Go" />
        </div> */}
          <div className="search-container">
            <input
              type="search"
              id="search"
              placeholder="Search..."
              value={searchKeyword}
              onChange={event => handleSearchInput(event)}
            />
            <button type="submit" className="icon">
              <i className="fa fa-search"></i>
            </button>
        </div>
      </form>
      {gifs.length > 0 && (
        <div className="giphy-container">
          {gifs.map(gif => {
            return <GiphyItem gif={gif} onClick={onItemClick} key={gif.id} />;
          })}
        </div>
      )}

      <PreviewModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedGif={selectedGif}
      />
    </div>
  );
};

export default SearchGiphy;
