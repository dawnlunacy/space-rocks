import React from 'react';
import './AsteroidCard.css';
import PropTypes from 'prop-types';

export const AsteroidCard = ({id, name, nasaUrl, isPotentiallyHazardous, estimatedDiameterMin, estimatedDiameterMax, closeApproachDate, relativeVelocity, missEarthDistance}) => {
  
  return (
    <section className="asteroid-card">
      <p className="p-ac"> ID: {id} </p>
      <p className="p-ac"> Name: {name} </p>
      <p className="p-ac"> Close Approach Date: {closeApproachDate} </p> 
      <p className="p-ac"> Is Potentially Hazardous: {isPotentiallyHazardous} </p>
      <p className="p-ac"> Estimated Diameter Min: {estimatedDiameterMin} Feet </p>
      <p className="p-ac"> Estimated Diameter Max: {estimatedDiameterMax} Feet </p>
      <p className="p-ac"> Relative Velocity: {relativeVelocity} Miles Per Hour</p>
      <p className="p-ac"> Will Miss Earth by: {missEarthDistance} Miles </p>
      <a href={nasaUrl} className="p-ac-link"> View in NASA database  </a>
    </section>
    
  )
}

export default AsteroidCard

AsteroidCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  nasaUrl: PropTypes.string,
  isPotentiallyHazardous: PropTypes.bool,
  estimatedDiameterMin: PropTypes.number,
  estimatedDiameterMax: PropTypes.number,
  closeApproachDate: PropTypes.string,
  relativeVelocity: PropTypes.string,
  missEarthDistance: PropTypes.string,
  neos: PropTypes.object,
  currentNeoDate: PropTypes.string
}