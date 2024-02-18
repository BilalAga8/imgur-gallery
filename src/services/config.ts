export const API_CONSTANTS = {
  url: "https://api.imgur.com",
  clientId: "be4d89202e2caf4",
};
export type sectionType = "hot" | "top" | "user";
export type sortType = "viral" | "top" | "time" | "rising";
export type windowType = "day" | "week" | "month" | "year" | "all";
export type GalleryPathParamitersType = {
  section: sectionType;
  sort: sortType;
  window: windowType;
  page: number;
};
export const getGalleryPath = ({
  page,
  section,
  sort,
  window,
}: GalleryPathParamitersType): string => {
  return `/3/gallery/${section}/${sort}/${window}/${page}?showViral=true&mature=true&album_previews=true`;
};

export const NAVTAB: Array<sectionType> = ["hot", "top", "user"];
export const DROPDOWN: Array<sortType> = ["rising", "top", "time", "viral"];

//// a7830789f741c6f05ad0a84b32ed922f9bec0658
