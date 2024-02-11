import { useEffect, useState } from "react";
import { ImageObjectDtoType, thubnailUrlType } from "../types/DtoTypes";
import { useQuery } from "react-query";
import testData from "../testData/testData.json";
import {
  API_CONSTANTS,
  GalleryPathParamitersType,
  getGalleryPath,
} from "./config";

export const useGalleryData = (initData: GalleryPathParamitersType) => {
  const [getGaleryParams, setGetGaleryParams] = useState(initData);
  const { data, refetch } = useQuery({
    queryKey: ["asdfdasfsdfdsafsda"],
    queryFn: () =>
      API_CONSTANTS.online ? getGalleryApi(getGaleryParams) : getGalleryTests(),

    staleTime: Infinity,
  });
  useEffect(() => {
    refetch();
  }, [getGaleryParams]);

  const getImage = (
    list: Array<{ type: string; link: string }>
  ): thubnailUrlType | undefined => {
    if (!list) return;
    const imageObjects = list.filter((n) => n.type === "image/jpeg");
    if (imageObjects.length === 0) return;
    const image = imageObjects[0];
    return image as unknown as thubnailUrlType;
  };

  const apiRawDataToImageObjectDto = (apiObj: any): ImageObjectDtoType => {
    const { images } = apiObj;
    return { ...apiObj, thubnailUrl: getImage(images) };
  };

  const apiRawDataToImageObjectDtoList = (
    apiObj: Array<any>
  ): Array<ImageObjectDtoType> => {
    if (!apiObj) return [];
    return apiObj.map(apiRawDataToImageObjectDto);
  };

  const imageObjectArray: Array<ImageObjectDtoType> =
    apiRawDataToImageObjectDtoList(data?.data);

  const getGalleryApi = (galery: GalleryPathParamitersType) =>
    fetch(API_CONSTANTS.url + getGalleryPath(galery), {
      headers: {
        Authorization: `Client-ID ${API_CONSTANTS.clientId}`,
      },
    })
      .then((res) => res.json())
      .then((n) => n.data);

  const getGalleryTests = () =>
    new Promise((res, error) => {
      res(testData);
    });
  return {
    imageObjectArray,
    setGetGaleryParams,
  };
};
