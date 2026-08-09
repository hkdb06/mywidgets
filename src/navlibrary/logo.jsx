import "./logo.css"
import logo from "../assets/logo.jpg"

function Logo() {
    return (
        <div className="logoMain">
            <div className="logoPic">
                <img src={logo} alt="EasyPeso Logo" />
            </div>
            <div className="logoContent">
                <div className="logoName">
                    <p>
                        EasyPeso Creation
                    </p>
                </div>
                <div className="logoDescription">
                    <p>
                        Lending Company and Webdev Agency
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Logo