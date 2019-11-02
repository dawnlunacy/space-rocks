import React from 'react';
import '../AsteroidContainer/AsteroidContainer.css'

export const AsteroidContainer = ({ image }) => {
  

  return (
    <main>
      <nav className="asteroid-container-nav">
      <p> DropDown </p>
      <p> InputDate </p>
      </nav>
      <section className="asteroid-main-section" style={ image }>
      <p> NEOs </p>
      </section>
    </main>
  )
}

