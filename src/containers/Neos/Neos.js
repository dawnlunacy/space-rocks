import React from 'react';
import { connect } from 'react-redux';

export const Neos = ({date, totalNeosOnDate}) => {

  return (
    <section>
      <h4 className="neo-date"> {date} </h4>
      <h4 className="neo-total-for-date"> {totalNeosOnDate} </h4>
      <button className="see-all-neos-btn" id={date}> See All </button>
    </section>
  )
}

export const mapStateToProps = state => ({
  neos: state.neos
})

export default connect(mapStateToProps, null)(Neos)