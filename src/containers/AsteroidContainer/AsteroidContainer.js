import React from 'react';
import { connect } from 'react-redux';
import '../AsteroidContainer/AsteroidContainer.css';
import AsteroidCard from '../AsteroidCard/AsteroidCard';
import AsteroidDateCard from '../AstroidDateCard/AsteroidDateCard';
import DatePicker from 'react-date-picker';
import { setStartDate } from '../../actions';

export const AsteroidContainer = ({ image, neos, displayDateSelectedNeos,currentNeoDate, startDateHelper, startDate}) => {
  console.log("startDate:", startDate)

  if (currentNeoDate !== '') {
    var asteroidCardsToDisply = neos[currentNeoDate].map(currentNeo => {
      return <AsteroidCard 
        key={currentNeo.id}
        id={currentNeo.id}
        name={currentNeo.name}
        nasaUrl={currentNeo.nasaUrl}
        isPotentiallyHazardous={currentNeo.isPotentiallyHazardous}
        estimatedDiameterMin={currentNeo.estimatedDiameterMin}
        estimatedDiameterMax={currentNeo.estimatedDiameterMax}
        closeApproachDate={currentNeo.closeApproachData[0].closeApproachDate}
        relativeVelocity={currentNeo.closeApproachData[0].relativeVelocity}
        missEarthDistance={currentNeo.closeApproachData[0].missEarthDistance}/>
    })
  }
    const dateKeys = Object.keys(neos);
    var neoInfoToDisplay = dateKeys.map(currentDate => {
    const date = currentDate;
    const totalNeosOnDate = neos[currentDate].length;
    return <AsteroidDateCard 
      key={date}
      date={date}
      totalNeosOnDate={totalNeosOnDate}
      displayDateSelectedNeos={displayDateSelectedNeos}
      />
    });
  
  return (
    <main>
      <nav className="asteroid-container-nav">
      <p className="select-date-text"> Please select start date to view Near Earth Objects for that week.</p>
      <DatePicker selected={startDate} onSelect={startDateHelper} onChange={startDateHelper} />
      <p className="selected-date-preview"> Date selected: {startDate}</p>
      </nav>
      <section className="asteroid-main-section" style={ image }>
        <article className="neo-weekday"> 
        {neoInfoToDisplay} 
        </article>
        <div className="asteroid-detailed-info">
          {asteroidCardsToDisply}
        </div>
      </section>
    </main>
  )
}

export const mapStateToProps = state => ({
  neos: state.neos,
  currentNeoDate: state.currentNeoDate,
  startDate: state.startDate
});

export const dispatchStateToProps = dispatch => ({
  setStartDate: date => dispatch(setStartDate(date)),
})


export default connect(mapStateToProps, null)(AsteroidContainer);
