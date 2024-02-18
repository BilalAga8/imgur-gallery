import {
  GalleryPathParamitersType,
  NAVTAB,
  sectionType,
} from "../services/config";
import "./Tabs.scss";
interface TabsProps {
  getGaleryParams: GalleryPathParamitersType;
  setGetGaleryParams: React.Dispatch<
    React.SetStateAction<GalleryPathParamitersType>
  >;
}
const Tabs = ({ getGaleryParams, setGetGaleryParams }: TabsProps) => {
  const sectionHandle = (tabsLabel: sectionType) => {
    setGetGaleryParams((prev) => ({
      ...prev,
      section: tabsLabel,
    }));
  };
  return (
    <div className="tab-container">
      <div className="tabs">
        {NAVTAB.map((tabsLabel, index) => (
          <button
            onClick={() => sectionHandle(tabsLabel)}
            key={index}
            className={`${
              getGaleryParams.section !== tabsLabel
                ? "tab-button"
                : "tab-button-active"
            }`}
          >
            {tabsLabel}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
