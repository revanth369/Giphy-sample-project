import React, { useRef } from "react";
import { useClickOutsideClose } from "./useClickOutside";

const PreviewModal = ({ closeModal, isOpen, selectedGif }) => {
  const contentRef = useRef(null);
  useClickOutsideClose(contentRef, closeModal, isOpen);

  return (
    isOpen && (
      <div className="preview-modal-overlay">
        <img
          src={selectedGif.images.original.url}
          alt={selectedGif.id}
          ref={contentRef}
        ></img>
      </div>
    )
  );
};

export default PreviewModal;
