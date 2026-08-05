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
        <div className="topBar">
          <div className="time">

          </div>
          <div className="date">
            
          </div>
        </div>
        
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
