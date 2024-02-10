import React from "react";
import { useGetGaleryApi } from "../api/apis";
import { useGalleryData } from "../services/useGalleryData";

const HomePage = () => {
  const { imageObjectArray, setGetGaleryParams } = useGalleryData({
    page: 0,
    section: "hot",
    sort: "rising",
    window: "day",
  });
  console.log("data", imageObjectArray);

  const imageScales = (sizes: number | undefined): number => {
    if (!sizes) return 500;
    return sizes - 500;
  };

  return (
    <div>
      {imageObjectArray?.map((n) => (
        <div key={n.title}>
          <div>{n.title}</div>
          <img
            src={n.thubnailUrl?.link}
            alt=""
            width={imageScales(n.thubnailUrl?.width)}
            height={imageScales(n.thubnailUrl?.height)}
          />
        </div>
      ))}
      <button
        onClick={() => {
          setGetGaleryParams({
            page: 5,
            section: "top",
            sort: "time",
            window: "year",
          });
        }}
      >
        hi
      </button>
    </div>
  );
};

export default HomePage;
