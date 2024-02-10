import axios from "axios";
import { useQuery } from "react-query";
import {
  API_CONSTANTS,
  GalleryPathParamitersType,
  getGalleryPath,
} from "./config";

import testData from "../testData/testData.json";
import { useEffect } from "react";

export const useGetGaleryApi = (galery: GalleryPathParamitersType) => {
  const { error, data, isFetching, refetch } = useQuery({
    queryKey: ["asdfdasfsdfdsafsda"],
    queryFn: () =>
      API_CONSTANTS.online ? getGalleryApi(galery) : getGalleryTests(),

    staleTime: Infinity,
  });

  useEffect(() => {
    refetch();
  }, [galery]);

  return {
    error,
    data,
    isFetching,
  };
};
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
