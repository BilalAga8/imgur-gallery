export const API_CONSTANTS = {
  url: "https://api.imgur.com",
  clientId: "17bf501494c6b27",
  online: false,
};
type sectionType = "hot" | "top" | "user";
type sortType = "viral" | "top" | "time" | "rising";
type windowType = "day" | "week" | "month" | "year" | "all";
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

export const NAVTAB = ["hot", "top", "user"];
