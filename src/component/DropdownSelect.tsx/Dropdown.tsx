import {
  DROPDOWN,
  GalleryPathParamitersType,
  sortType,
} from "../../services/config";

import "./Dropdown.scss";

interface DropdownProps {
  getGaleryParams: GalleryPathParamitersType;
  setGetGaleryParams: React.Dispatch<
    React.SetStateAction<GalleryPathParamitersType>
  >;
}
function Dropdown({ getGaleryParams, setGetGaleryParams }: DropdownProps) {
  const onSelect = (item: sortType) => {
    console.log("Dropdown", item);

    setGetGaleryParams((prev) => ({
      ...prev,
      sort: item,
    }));
  };
  return (
    <select
      className="selectContainer"
      onChange={(e) => {
        onSelect(e.target.value as sortType);
      }}
    >
      <option defaultChecked disabled>
        {getGaleryParams.sort}
      </option>
      {DROPDOWN.map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
}
export default Dropdown;
