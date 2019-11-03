import React from 'react';
import { connect } from 'react-redux';
import '../AsteroidContainer/AsteroidContainer.css';

export const AsteroidContainer = ({ image, neos }) => {
  console.log("neow", neos)
  // console.log("neowKEY", Object.keys(neos))

  return (
    <main>
      <nav className="asteroid-container-nav">
      <p> DropDown </p>
      <p> InputDate </p>
      </nav>
      <section className="asteroid-main-section" style={ image }>
      {/* <p> {neos} </p> */}
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