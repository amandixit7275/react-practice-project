import "./App.css";
import BookComponent from "./components/BookComponent";

import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/cutom-model-popup/modal-test";
import QrCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
// import LightDarkMode from "./light-dark-mode";

function App() {
  return (
    <div className="App">
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <BookContainer /> */}
      <BookComponent />
    </div>
  );
}

export default App;
