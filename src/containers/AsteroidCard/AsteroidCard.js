import React from 'react';
import './AsteroidCard.css';
import { connect } from 'react-redux';

export const AsteroidCard = ({id, name, nasaUrl, isPotentiallyHazardous, estimatedDiameterMin, estimatedDiameterMax, closeApproachDate, relativeVelocity, missEarthDistance}) => {
 console.log("why", typeof isPotentiallyHazardous)
  
  return (
    <section className="asteroid-card">
      <p> ID: {id} </p>
      <p> Name: {name} </p>
      <p> Close Approach Date: {closeApproachDate} </p> 
      <p> Is Potentially Hazardous: {isPotentiallyHazardous} </p>
      <p> Estimated Diameter Min: {estimatedDiameterMin} Feet </p>
      <p> Estimated Diameter Max: {estimatedDiameterMax} Feet </p>
      <p> Relative Velocity: {relativeVelocity} Miles Per Hour</p>
      <p> Will Miss Earth by: {missEarthDistance} Miles </p>
      <p> Link to Nasa: {nasaUrl} </p>
    </section>
    
  )
}

export const mapStateToProps = state => ({
  neos: state.neos,
  currentNeoDate: state.currentNeoDate
});

export default connect(mapStateToProps, null)(AsteroidCard)