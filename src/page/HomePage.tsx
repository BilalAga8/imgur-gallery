import React, { useEffect, useRef, useState } from "react";
import { useGalleryData } from "../services/useGalleryData";
import "./HomePageStyles.scss";
import ImageCard from "../component/ImageCard";
import Tabs from "../component/Tabs";
import Dropdown from "../component/DropdownSelect.tsx/Dropdown";
import ImageDetails from "../component/imageDetails/ImageDetails";
import { ImageObjectDtoType } from "../types/DtoTypes";
const HomePage = () => {
  const { imageObjectArray, setGetGaleryParams, getGaleryParams } =
    useGalleryData({
      page: 0,
      section: "hot",
      sort: "rising",
      window: "day",
    });

  const [imageSelected, setImageSelected] = useState<ImageObjectDtoType>();
  const [changDivHeight, setChangDivHeight] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  console.log("data", imageObjectArray);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const divHeight = navbarRef?.current?.clientHeight;
      const scrollBarHeight = window.pageYOffset;
      if (!divHeight) return;
      if (scrollBarHeight > divHeight) {
        setChangDivHeight(true);
      } else {
        setChangDivHeight(false);
      }
    });
  }, []);
  return (
    <div className="tests">
      <div
        ref={navbarRef}
        className={`${changDivHeight ? "headerNavChanged" : "headerNav"}`}
      >
        <div className="backgroundNav"></div>
        <Tabs
          setGetGaleryParams={setGetGaleryParams}
          getGaleryParams={getGaleryParams}
        />
        <Dropdown
          setGetGaleryParams={setGetGaleryParams}
          getGaleryParams={getGaleryParams}
        />
      </div>
      <div className="photoDisplayGrid">
        {imageObjectArray?.map((n, index) => (
          <ImageCard
            onClick={() => {
              setImageSelected(n);
            }}
            key={n.title}
            {...n}
          />
        ))}
      </div>
      {imageSelected && (
        <ImageDetails
          onClose={() => setImageSelected(undefined)}
          imageObj={imageSelected}
        />
      )}
    </div>
  );
};

export default HomePage;
