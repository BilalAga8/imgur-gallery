export type thubnailUrlType = {
  link: string;
  height: number;
  width: number;
  type: "image" | "video";
};
export type ImageObjectDtoType = {
  title?: string;
  thubnailUrl?: thubnailUrlType;
  description?: string;
  ups?: number;
  downs?: number;
  score?: Number;
};
