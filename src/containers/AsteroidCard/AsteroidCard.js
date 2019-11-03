import React from 'react';
import './AsteroidCard.css';
import { connect } from 'react-redux';

export const AsteroidCard = ({currentNeoDate, neos}) => {
 
  
  return (
    <section>
      <p> Testing Our Communication</p>
    </section>
    
  )
}

export const mapStateToProps = state => ({
  neos: state.neos,
  currentNeoDate: state.currentNeoDate
});

export default connect(mapStateToProps, null)(AsteroidCard)