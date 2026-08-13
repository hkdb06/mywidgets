import {useEffect, useState } from 'react'
import './Collection.css'
import Qrgenerator from "./qrlibrary/qrgenerator"
import Logo from "./navlibrary/logo.jsx"
import Pfp from "./navlibrary/pfp"
import Clock from "./navlibrary/clock.jsx"
import Calendar from "./navlibrary/calendar.jsx"
import Landscape1 from "./assets/Landscape1.png"
import Landscape2 from "./assets/Landscape2.png"
import Landscape3 from "./assets/Landscape3.png"
import Landscape4 from "./assets/Landscape4.png"
import Landscape5 from "./assets/Landscape5.png"
import Landscape6 from "./assets/Landscape6.png"

function Collection() {
  const [slideshow, setSlideshow] = useState (0);

  const backgrounds = [
    Landscape1,
    Landscape2,
    Landscape3,
    Landscape4,
    Landscape5,
    Landscape6
  ];

  useEffect(() => {
    const showInterval = setInterval (() => {
      setSlideshow(slideshow => slideshow === backgrounds.length - 1 
        ? 0
        : slideshow + 1
      );
    },10000);

    return () => clearInterval(showInterval);
  }, []);
  

  return (
    <div 
      className="background"
      style={{backgroundImage:`url(${backgrounds[slideshow]})`}}
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
                <Clock/>
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