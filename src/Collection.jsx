import { useState } from 'react'
import './Collection.css'
import Landscape1 from "./assets/Landscape1.png"

function Collection() {

  return (
    <div 
      className="background"
      style={{backgroundImage:`url(${Landscape1})`}}
    >
      <div className="container">
        <nav className="topBar">
          <div className="topItems">
            <div className="topContent">
              {/*Project Name or Logo*/}
            </div>
            <div className="topContent">
              {/*Profile pic with name*/}
            </div>
            <div className="topContent">
              {/*Date and Time*/}
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
          
        
        <div className="toDo">

        </div>
        <div className="weather">

        </div>
        <div className="calendar">

        </div>
        <div className="qrGenerate">

        </div>
      </div>
    </div>
  )
}

export default Collection
