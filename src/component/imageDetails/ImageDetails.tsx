import React from "react";
import "./ImageDetails.scss";
import { ImageObjectDtoType } from "../../types/DtoTypes";

interface ImageDetailsProps {
  imageObj: ImageObjectDtoType;
  onClose: () => void;
}
const ImageDetails = ({ imageObj, onClose }: ImageDetailsProps) => {
  const { description, downs, score, thubnailUrl, title, ups } = imageObj;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {thubnailUrl?.type === "video" && (
          <video
            width={500}
            height={500}
            autoPlay
            src={thubnailUrl.link}
            className="modal-image"
          ></video>
        )}
        {thubnailUrl?.type === "image" && (
          <img
            width={500}
            height={500}
            src={thubnailUrl?.link}
            alt={title}
            className="modal-image"
          />
        )}

        <div className="modal-details">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{description}</p>
          <div className="modal-votes">
            <span className="upvotes">{ups} Upvotes</span>
            <span className="downvotes">{downs} Downvotes</span>
            <span className="score">Score: {score?.toString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
