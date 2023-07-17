import { useEffect, useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
// import { getCameraList } from "./Utils";
import "./index.css";
const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
const brConfig = { fps: 10, qrbox: { width: 300, height: 150 } };
let html5QrCode;

// function startCamera(){}

export const Scanner = (props) => {
  const fileRef = useRef(null);
  useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");
    getCameras();
    const oldRegion = document.getElementById("qr-shaded-region");
    oldRegion && oldRegion.remove();
  }, []);

  const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.info(decodedResult, decodedText);
      props.onResult(decodedText);
      alert(`decoded:__ ${decodedText}`);
    };
    html5QrCode
      .start(
        { facingMode: "environment" },
        props.type === "QR" ? qrConfig : brConfig,
        qrCodeSuccessCallback
      )
      .then(() => {
        // const oldRegion = document.getElementById("qr-shaded-region");
        // if (oldRegion) oldRegion.innerHTML = "";
      });
  };
  const getCameras = () => {
    Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        console.info(devices);
        if (devices && devices.length) {
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleStop = () => {
    try {
      html5QrCode
        .stop()
        .then((res) => {
          html5QrCode.clear();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const scanLocalFile = () => {
    fileRef.current.click();
  };
  const scanFile = (e) => {
    if (e.target.files.length === 0) {
      // No file selected, ignore
      return;
    }

    const imageFile = e.target.files[0];
    console.info(imageFile);
    html5QrCode
      .scanFile(imageFile, true)
      .then((qrCodeMessage) => {
        console.log(qrCodeMessage);
        props.onResult(qrCodeMessage);
        html5QrCode.clear();
      })
      .catch((err) => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <div id="reader" style={{ width: "100%" }}></div>
      <button onClick={() => handleClickAdvanced()}>
        click pro {props.type}
      </button>
      <button onClick={() => handleStop()}>stop pro</button>
      <br />
      <br />
      <button onClick={scanLocalFile}>Scan local file</button>
      <input
        type="file"
        hidden
        ref={fileRef}
        accept="image/*"
        onChange={scanFile}
      />
    </div>
  );
};

function BarQrScanner() {
  const [decodedValue, setDecodedValue] = useState("");
  const [scannerType, setScannerType] = useState("BAR");
  return (
    <>
      <label>
        <input
          type="radio"
          value="QR"
          name="scannerType"
          onChange={() => setScannerType("QR")}
        />
        QR
      </label>
      <label>
        <input
          type="radio"
          defaultChecked
          value="BAR"
          name="scannerType"
          onChange={() => setScannerType("BAR")}
        />
        BAR
      </label>
      <Scanner type={scannerType} onResult={(res) => setDecodedValue(res)} />
      <br />
      <p style={{ width: "100%", wordWrap: "break-word" }}>
        <strong>Value:</strong>
        {decodedValue}
      </p>
    </>
  );
}

export default BarQrScanner;
