import React from 'react';
import { connect } from 'react-redux';
import '../AsteroidContainer/AsteroidContainer.css';
import Neos from '../Neos/Neos';

export const AsteroidContainer = ({ image, neos}) => {
 
    const dateKeys = Object.keys(neos)
    var neoInfoToDisplay = dateKeys.map(currentDate => {
    const date = currentDate;
    const totalNeosOnDate = neos[currentDate].length;
    return <Neos 
      key={date}
      date={date}
      totalNeosOnDate={totalNeosOnDate}
      />
    })
  
  
  return (
    <main>
      <nav className="asteroid-container-nav">
      <p> DropDown </p>
      <p> InputDate </p>
      </nav>
      <section className="asteroid-main-section" style={ image }>
        <article className="neo-weekday"> 
        {neoInfoToDisplay} 
        </article>
      </section>
    </main>
  )
}

export const mapStateToProps = state => ({
  neos: state.neos
});


export default connect(mapStateToProps, null)(AsteroidContainer);
