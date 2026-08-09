import { useState } from 'react'
import './qrgenerator.css'

function Qrgenerator() {
    const [qrText, setQrText] = useState("");
    const [qrImage, setQrImage] = useState("");
    
    function generateQr() {
        if (qrText.trim() !== "") {
            setQrImage(
                `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`
            );
        }
    }
    return(
        <div className="qrContainer">
            <div className="value">
                <div className="inputUrl">
                    <div className="qrInput">
                        <p>
                        Enter your text or URL
                        </p>
                        <input 
                            type="text" 
                            value={qrText}
                            placeholder="Text or URL"
                            onChange={(e) => setQrText(e.target.value)}
                            id="qrText"
                        />
                    </div>
                </div>
                <div id="imgBox">
                    <img 
                        src="" 
                        id="qrImage"
                    />
                </div>
                <div className="generateButton">
                    <button onClick={generateQr}>
                        Generate
                    </button>
                </div>
            </div>
            <div className="result">
                {qrImage &&(
                    <img
                        src={qrImage} 
                        alt="Qr Code" 
                    />
                )}
            </div>    
        </div>
    )
}

export default Qrgenerator;