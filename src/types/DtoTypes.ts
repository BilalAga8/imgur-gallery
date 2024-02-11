export type thubnailUrlType = {
  link: string;
  height: number;
  width: number;
};
export type ImageObjectDtoType = {
  title?: string;
  thubnailUrl?: thubnailUrlType;
  description?: string;
  ups?: number;
  downs?: number;
  score?: Number;
};
