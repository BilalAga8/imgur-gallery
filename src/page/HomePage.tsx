import React from "react";
import { useGalleryData } from "../services/useGalleryData";
import "./HomePageStyles.scss";
import ImageCard from "../component/ImageCard";
import Tabs from "../component/Tabs";
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
      <Tabs></Tabs>
      {/* krijimi i nj komponenti ui */}
      {/* krijo tebet komponent m vete */}
      {/* component m vete */}
      {imageObjectArray?.map((n) => (
        <ImageCard key={n.title} {...n} />
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
