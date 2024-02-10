import { ImageObjectDtoType, thubnailUrlType } from "./DtoTypes";

const apiRawDataToImageObjectDto = (apiObj: any): ImageObjectDtoType => {
  const { images } = apiObj;
  return { ...apiObj, thubnailUrl: getImage(images) };
};

const getImage = (
  list: Array<{ type: string; link: string }>
): thubnailUrlType | undefined => {
  if (!list) return;
  const imageObjects = list.filter((n) => n.type === "image/jpeg");
  if (imageObjects.length === 0) return;
  const image = imageObjects[0];
  return image as unknown as thubnailUrlType;
};

export const apiRawDataToImageObjectDtoList = (
  apiObj: Array<any>
): Array<ImageObjectDtoType> => {
  if (!apiObj) return [];
  return apiObj.map(apiRawDataToImageObjectDto);
};
