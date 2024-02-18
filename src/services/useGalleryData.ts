import { useEffect, useState } from "react";
import { ImageObjectDtoType, thubnailUrlType } from "../types/DtoTypes";
import { useQuery } from "react-query";
import {
  API_CONSTANTS,
  GalleryPathParamitersType,
  getGalleryPath,
} from "./config";

export const useGalleryData = (initData: GalleryPathParamitersType) => {
  const [getGaleryParams, setGetGaleryParams] =
    useState<GalleryPathParamitersType>(initData);
  const { data, refetch } = useQuery({
    queryKey: ["asdfdasfsdfdsafsda"],
    queryFn: () => getGalleryApi(getGaleryParams),

    staleTime: Infinity,
  });
  useEffect(() => {
    refetch();
  }, [getGaleryParams]);

  const getImage = (
    list: Array<{ type: string; link: string }>
  ): thubnailUrlType | undefined => {
    if (!list) return;
    const imageObjects = list.filter(
      (n) => n.type.includes("image") || n.type.includes("video")
    );
    if (imageObjects.length === 0) return;
    const image = imageObjects[0];
    return {
      ...image,
      type: image.type.includes("image") ? "image" : "video",
    } as unknown as thubnailUrlType;
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

  const getGalleryApi = async (galery: GalleryPathParamitersType) => {
    const getData = await fetch(API_CONSTANTS.url + getGalleryPath(galery), {
      // mode: "cors",
      // mode: "cors",
      // cache: "no-cache",
      // credentials: "same-origin",
      // redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        Authorization: `Client-ID ${API_CONSTANTS.clientId}`,
        // "Content-Type": "application/json",
      },
    });
    return await getData.json();
  };

  return {
    imageObjectArray,
    setGetGaleryParams,
    getGaleryParams,
  };
};
