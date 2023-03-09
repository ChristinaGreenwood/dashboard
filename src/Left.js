import React from "react";
import NavOrg from "../src/images/NavOrg.png";
import NavLogo from "../src/images/NavLogo.png";
import Bottom from "../src/images/Bottom.png";

function Left() {
  return (
    <div className='left-wrapper'>
      <img src={NavLogo} />
      <img src={NavOrg} />
      <div className='nav-user'>
        <img src={Bottom} />
      </div>
    </div>
  );
}
export default Left;
