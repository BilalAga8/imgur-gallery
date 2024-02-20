import React from "react";
import { ImageObjectDtoType } from "../types/DtoTypes";
import "./ImageCard.scss";

interface ImageCardProps extends ImageObjectDtoType {
  onClick: () => void;
}
const ImageCard = ({
  description,
  downs,
  score,
  thubnailUrl,
  title,
  ups,
  onClick,
}: ImageCardProps) => {
  const imageScales = (sizes: number | undefined): number => {
    if (!sizes) return 500;
    return sizes - 500;
  };
  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const number3Randoms = getRandomArbitrary(0, 3);
  const heightChanges = (height?: number, width?: number) => {
    if (!height || !width) {
      return 1;
    }
    const aspectRatio = height / width;
    return Math.round(aspectRatio);
  };
  return (
    <div
      onClick={onClick}
      className="card"
      style={{
        gridRowEnd: `span ${heightChanges(
          thubnailUrl?.height,
          thubnailUrl?.width
        )}`,
      }}
    >
      {thubnailUrl?.type === "video" && (
        <video
          style={{
            objectFit: "contain",
          }}
          muted
          autoPlay
          src={thubnailUrl.link}
          className="card__photo"
        ></video>
      )}
      {thubnailUrl?.type === "image" && (
        <img
          style={{
            objectFit: "contain",
          }}
          src={thubnailUrl?.link}
          alt={title}
          className="card__photo"
        />
      )}
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
