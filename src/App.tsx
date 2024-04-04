import './App.css'
import Html5QrcodePlugin from "./Html5QrcodePlugin.tsx";
import {Html5QrcodeResult} from "html5-qrcode";

function App() {

    const onNewScanResult = (decodedText: string, decodedResult: Html5QrcodeResult) => {
        console.log(`Scan result: ${decodedText}`, decodedResult);
    };

    return (
        <div className="App">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    )
}

export default App
