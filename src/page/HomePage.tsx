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

  return (
    <div>
      <button
        onClick={() => {
          setGetGaleryParams({
            page: 5,
            section: "top",
            sort: "time",
            window: "year",
          });
        }}
      ></button>
    </div>
  );
};

export default HomePage;
