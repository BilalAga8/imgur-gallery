import { NAVTAB } from "../services/config";
import "./Tabs.scss";
const Tabs = () => {
  return (
    <div className="tab-container">
      <div className="tabs">
        {NAVTAB.map((tabsLabel, index) => (
          <button key={index} className="tab-button">
            {tabsLabel}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
