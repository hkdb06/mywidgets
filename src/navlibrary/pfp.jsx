import "./pfp.css"
import cathpfp from "../assets/cathpfp.jpg"
import kylepfp from "../assets/kylepfp.jpg"

function pfp() {
    return(
        <div className="bothPfp">
            <div className="cathPfp">
                <div className="cathName">
                    <p>
                        Hi I'm Cath!
                    </p>
                </div>
                <div className="cathPic">
                    <img src={cathpfp} alt="PictureCath"/>
                </div>
            </div>
            <div className="kylePfp">
                <div className="kylePic">
                    <img src={kylepfp} alt="PictureKyle" />
                </div>
                <div className="kyleName">
                    <p>
                        Hello I'm Kyle!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default pfp