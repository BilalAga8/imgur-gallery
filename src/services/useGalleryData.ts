import { useState } from "react";
import { useGetGaleryApi } from "../api/apis";
import { ImageObjectDtoType } from "../dtos/DtoTypes";
import { apiRawDataToImageObjectDtoList } from "../dtos/ImageObjectDto";
import { GalleryPathParamitersType } from "../api/config";

export const useGalleryData = (initData: GalleryPathParamitersType) => {
  const [getGaleryParams, setGetGaleryParams] = useState(initData);
  const { data } = useGetGaleryApi(getGaleryParams);

  const imageObjectArray: Array<ImageObjectDtoType> =
    apiRawDataToImageObjectDtoList(data?.data);
  return {
    imageObjectArray,
    setGetGaleryParams,
  };
};
