import React from "react";
import { useGalleryData } from "../services/useGalleryData";
import "./HomePageStyles.scss";
import ImageCard from "../component/ImageCard";
const HomePage = () => {
  const { imageObjectArray, setGetGaleryParams } = useGalleryData({
    page: 0,
    section: "hot",
    sort: "rising",
    window: "day",
  });
  console.log("data", imageObjectArray);

  return (
    <div className="tests">
      {imageObjectArray?.map((n) => (
        <ImageCard key={n.title} {...n}></ImageCard>
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
