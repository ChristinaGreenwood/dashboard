import React from "react";
import Shapes from "../src/images/search.svg";
import TitleData from "./TitleData";
import NavCard from "./NavCard";

function Nav() {
  const navElement = TitleData.map((title) => {
    return <NavCard key={title.id} title={title} />;
  });
  return (
    <div className='nav-wrapper'>
      <div className='user-title'>RainFocus Summit</div>
      <div className='date-location'>Lehi, UT • December 15th</div>
      <form>
        <img src={Shapes} />
        <input type='text' placeholder='Search' />
      </form>
      <div className='sidenav'>{navElement}</div>
    </div>
  );
}
export default Nav;
