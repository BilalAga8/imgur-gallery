import { ImageObjectDtoType } from "./DtoTypes";

const apiRawDataToImageObjectDto = (apiObj: any): ImageObjectDtoType => {
  const { title, description, images } = apiObj;

  return {
    description: description,
    thubnailUrl: getImage(images),
    title: title,
  };
};

const getImage = (
  list: Array<{ type: string; link: string }>
): string | undefined => {
  if (!list) return;
  const imageObjects = list.filter((n) => n.type === "image/jpeg");
  if (imageObjects.length === 0) return;
  const image = imageObjects[0].link;
  return image;
};

export const apiRawDataToImageObjectDtoList = (
  apiObj: Array<any>
): Array<ImageObjectDtoType> => {
  if (!apiObj) return [];
  return apiObj.map(apiRawDataToImageObjectDto);
};
