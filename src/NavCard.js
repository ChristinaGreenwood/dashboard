import React from "react";

function NavCard({ title }) {
  const pageNames = (title) => {
    return title.titles.map((sub) => {
      return <div className='sub-el'>{sub}</div>;
    });
  };
  return (
    <div>
      <div className='sidenav-link'>
        {title.icon && <img src={require(`../src/images/${title.icon}`)}></img>}
        <a id={title.div} href='#'>
          {title.title}
        </a>
      </div>
      {title.titles && <div className='sub-page'>{pageNames(title)}</div>}
    </div>
  );
}
export default NavCard;
