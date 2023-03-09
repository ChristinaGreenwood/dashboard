import React from "react";
import PersonPortal from "../src/images/PersonPortal.png";
import AttendeeCard from "../src/AttendeeCard";
import AttendeeData from "../src/AttendeeData";

function Attendee() {
  const AttendeeElement = AttendeeData.map((el) => {
    return <AttendeeCard key={el.id} el={el} />;
  });
  return (
    <div>
      <div className='attendee-header'>
        <img src={PersonPortal}></img>
        <div className='attendee-title'>Attendee</div>
      </div>
      <div className='attendeeelement'>{AttendeeElement}</div>
    </div>
  );
}
export default Attendee;
