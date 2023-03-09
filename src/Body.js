import React from "react";
import rfs from "../src/images/rfs.png";
import Attendee from "./Attendee";

function Body() {
  return (
    <div className='main-section'>
      <div>
        <div className='main-section-wrapper'>
          <img
            className='main-section-img'
            style={{
              height: "89px",
              width: "89px",
            }}
            src={rfs}
          />
          <div className='header-title-wrapper'>
            <div className='header-title-box'>
              <div className='title'>RainFocus Summit</div>
              <button>Edit event</button>
            </div>
            <div className='title-text'>December 15th</div>
            <div className='title-text'>Lehi, Utah</div>
          </div>
        </div>
        <div className='event-setup'>
          <h1 className='event-setup-title'>Event setup guide</h1>
          <div className='event-setup-desc'>
            See the available list of modules below. We suggest that you start
            with the attendee module.
          </div>
        </div>
      </div>
      <Attendee />
    </div>
  );
}
export default Body;
