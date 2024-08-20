import * as adwIcons from "adw-react-icons";
import "./IconsTable.scss";

const IconsTable = () => {
  return (
    <div className="icons-table">
      <div className="t-row">
        <p>Icon preview</p>
        <p>Component name</p>
      </div>
      {Object.entries(adwIcons).map(([iconName, Component]) => (
        <div className="row" key={iconName}>
          <div>
            <Component size={48} iconNameAsTitle />
          </div>
          <p>{iconName}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsTable;
