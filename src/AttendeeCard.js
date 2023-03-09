import React from "react";

function AttendeeCard({ el }) {
  const titles = (el) => {
    return el.titles.map((card) => {
      return (
        <div className={card.box}>
          <div className='image-box'>
            {card.image && (
              <img
                className='icon-main'
                src={require(`../src/images/${card.image}`)}
              ></img>
            )}
            <span className='title-style'>{card.title}</span>
          </div>
          <span className='disc-style'>{card.discription}</span>
        </div>
      );
    });
  };

  return (
    <div>
      <div className='step-style'>
        {" "}
        <strong>Step:{el.id}:</strong> {el.stepDisc}
      </div>
      <div className={el.name}>
        {" "}
        {el.titles && <div className={el.nameTwo}>{titles(el)}</div>}
      </div>
    </div>
  );
}
export default AttendeeCard;
