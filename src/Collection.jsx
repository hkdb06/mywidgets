import { useState } from 'react'
import './Collection.css'
import Qrgenerator from "./qrlibrary/qrgenerator"
import Logo from "./navlibrary/logo.jsx"
import Pfp from "./navlibrary/pfp"
import Calendar from "./navlibrary/calendar.jsx"
import Landscape1 from "./assets/Landscape1.png"

function Collection() {
  const [qrImage, setQrImage] = useState("");
  return (
    <div 
      className="background"
      style={{backgroundImage:`url(${Landscape1})`}}
    >
      <div className="container">
        <nav className="topBar">
          <div className="topItems">
            <div className="topLogo">
              {/*Project Name or Logo*/}
              <Logo/>
            </div>
            <div className="topPfp">
              {/*Profile pic with name*/}
              <Pfp/>
            </div>
            <div className="topContent">
              {/*Date and Time*/}
              <div className="clock">
                <p>
                  clock
                </p>
              </div>
              <div className="calendar">
                <Calendar/>
              </div>
            </div>
          </div>
        </nav>
        <main className="bottomBars">
          <div className="bottomItems">
            <div className="left">
              <div className="leftItems">
                <div className="leftTop">
                  <div className="ourPictures">
                    {/*Our Pictures slideshow w/ show all button*/}
                  </div>
                </div>
                <div className="leftBottom">
                  <div className="quoteSection">
                    {/*Quote Section*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="middleItems">
                <div className="tools">
                </div>
                <div className="coupleSection">
                  <div className="rsInfo">
                    
                  </div>
                  <div className="widgets">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rightItems">
                <div className="cathSocials">
                  {/*Social Media ni cath*/}
                </div>
                <div className="kyleSocials">
                  {/*Social Media ni Kyle*/}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Collection
