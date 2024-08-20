import { AdwCatSleepingSymbolic } from "adw-react-icons";
import "./PageHeader.scss";

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="app-name">
        <AdwCatSleepingSymbolic size={18} />
        <p>adw-react-icons</p>
      </div>
      <div>
        <a
          href="https://github.com/orlowski-dev/adw-react-icon-pack"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default PageHeader;
