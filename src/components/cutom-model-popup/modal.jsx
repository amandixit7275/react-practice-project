import "./modal.css";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-modal-icon">
          &times;
        </span>
        <div className="header">
          <h2> {header ? header : "Header"} </h2>
        </div>
        <div className="body">
          <div>
            {body ? (
              body
            ) : (
              <div>
                {" "}
                <p> </p> This is out Body{" "}
              </div>
            )}
          </div>
        </div>
        <div className="footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
}
