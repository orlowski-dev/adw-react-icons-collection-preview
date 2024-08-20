import { PageHeader } from "./components/page-header";
import "./App.scss";
import { IconsTable } from "./components/icons-table";

const App = () => {
  return (
    <>
      <PageHeader />
      <main>
        <h1>Adwaita icons collection for React</h1>
        <IconsTable />
      </main>
    </>
  );
};

export default App;
