import React from 'react';
import { connect } from 'react-redux';
import '../AsteroidContainer/AsteroidContainer.css';
import Neos from '../Neos/Neos';
import { isEmpty } from '../../utils/helpers';

export const AsteroidContainer = ({ image, neos }) => {
  console.log("neow", isEmpty(neos))
  if (isEmpty(neos)) {
      return 
  } else {
    const dateKeys = Object.keys(neos)
    var neoInfoToDisplay = dateKeys.map(currentDate => {
    const date = currentDate;
    const totalNeosOnDate = neos[currentDate].length;
    return <Neos 
      date={date}
      totalNeosOnDate={totalNeosOnDate}
      />
    })
  }
  
  return (
    <main>
      <nav className="asteroid-container-nav">
      <p> DropDown </p>
      <p> InputDate </p>
      </nav>
      <section className="asteroid-main-section" style={ image }>
      <p> {neoInfoToDisplay} </p>
      <p> HI </p>
      </section>
    </main>
  )
}

// export const mapStateToProps = state => ({
//   neos: state.neos.near_earth_objects
// });

export const mapStateToProps = state => {
  console.log("MEOW", state.neos)
  return ({
  neos: state.neos.near_earth_objects
  })
}

export default connect(mapStateToProps, null)(AsteroidContainer);

// neosTotal: state.neos.element_count,