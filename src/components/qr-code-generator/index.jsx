import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [input, Setinput] = useState("");
  const [qrCode, SetqrCode] = useState("");

  function handleGenerateQrCode() {
    SetqrCode(input);
    Setinput("");
  }

  return (
    <div>
      <input
        type="text"
        id="qr-code"
        onChange={(e) => Setinput(e.target.value)}
        name="qr-code"
        placeholder="Enter the value here"
        value={input}
      />
      <button onClick={handleGenerateQrCode}>Generate QR Code</button>
      <QRCode value={qrCode} size={400} bgColor="#fff" />
    </div>
  );
}
