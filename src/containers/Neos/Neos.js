import React from 'react';
import { connect } from 'react-redux';
import './Neos.css';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';

export const Neos = ({date, totalNeosOnDate, displayDateSelectedNeos, currentNeoDate, neos}) => {
  if (currentNeoDate !== '') {
    var asteroidCardsToDisply = neos[currentNeoDate].map(currentNeo => {
      return <AsteroidCard />

    })
  }

  return (
    <section className="neo-daily-display">
      <h4 className="neo-date"> {date} </h4>
      <h4 className="neo-total-for-date"> Total NEOs: {totalNeosOnDate} </h4>
      <button className="see-all-neos-btn" id={date} onClick={(e) => displayDateSelectedNeos(e)}> See All </button>
      <div> 
        {asteroidCardsToDisply}
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  neos: state.neos,
  currentNeoDate: state.currentNeoDate,
})

export default connect(mapStateToProps, null)(Neos)