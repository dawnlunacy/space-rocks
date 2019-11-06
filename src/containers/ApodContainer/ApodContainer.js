import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ApodContainer.css';

export const ApodContainer = ({ apod }) => {

  return (
    <section className="apod-container" style= { apod }>
      <div className="apod-info"> 
        <p className="apod-description"> The background image you see here is the Astronomy Picture of the Day from NASA </p>
      </div>
    </section>
  )
};

export const mapStateToProps = state => ({
  apod: state.apod
});

export default connect(mapStateToProps, null)(ApodContainer);

ApodContainer.propTypes = {
  apod:PropTypes.object
}