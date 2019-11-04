import React from 'react';
import './AsteroidDateCard.css';

export const AsteroidDateCard = ({date, totalNeosOnDate, displayDateSelectedNeos}) => {
 
  return (
    <section className="neo-daily-display">
      <h4 className="neo-date"> {date} </h4>
      <h4 className="neo-total-for-date"> Total NEOs: {totalNeosOnDate} </h4>
      <button className="see-all-neos-btn" id={date} onClick={(e) => displayDateSelectedNeos(e)}> See All </button>
    </section>
  )
};

export default AsteroidDateCard;
