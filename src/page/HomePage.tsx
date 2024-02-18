import React from "react";
import { useGalleryData } from "../services/useGalleryData";
import "./HomePageStyles.scss";
import ImageCard from "../component/ImageCard";
import Tabs from "../component/Tabs";
import Dropdown from "../component/DropdownSelect.tsx/Dropdown";
const HomePage = () => {
  const { imageObjectArray, setGetGaleryParams, getGaleryParams } =
    useGalleryData({
      page: 0,
      section: "hot",
      sort: "rising",
      window: "day",
    });
  console.log("data", imageObjectArray);

  return (
    <div className="tests">
      <div className="headerNav">
        <Tabs
          setGetGaleryParams={setGetGaleryParams}
          getGaleryParams={getGaleryParams}
        />
        <Dropdown
          setGetGaleryParams={setGetGaleryParams}
          getGaleryParams={getGaleryParams}
        />
      </div>
      {/* krijimi i nj komponenti ui */}
      {/* krijo tebet komponent m vete */}
      {/* component m vete */}
      <div className="photoDisplayGrid">
        {imageObjectArray?.map((n, index) => (
          <ImageCard key={n.title} {...n} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
