import "./App.css";
import QrCodeGenerator from "./components/qr-code-generator";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import LightDarkMode from "./light-dark-mode";

function App() {
  return (
    <div className="App">
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      <LightDarkMode />
    </div>
  );
}

export default App;
