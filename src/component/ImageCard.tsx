import React from "react";
import { ImageObjectDtoType } from "../types/DtoTypes";

interface ImageCardProps extends ImageObjectDtoType {}
const ImageCard = ({
  description,
  downs,
  score,
  thubnailUrl,
  title,
  ups,
}: ImageCardProps) => {
  const imageScales = (sizes: number | undefined): number => {
    if (!sizes) return 500;
    return sizes - 500;
  };
  return (
    <div>
      <div>{title}</div>
      <img
        src={thubnailUrl?.link}
        alt=""
        width={imageScales(thubnailUrl?.width)}
        height={imageScales(thubnailUrl?.height)}
      />
    </div>
  );
};

export default ImageCard;
