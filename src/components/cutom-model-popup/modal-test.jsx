import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  console.log(showModalPopup);
  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="button-click">
      <div>
        <button className="button" onClick={handleToggleModalPopup}>
          Show Modal{" "}
        </button>
      </div>

      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          body={<div>Customized Body</div>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
