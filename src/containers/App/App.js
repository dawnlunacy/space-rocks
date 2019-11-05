
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import ApodContainer from '../ApodContainer/ApodContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading, setCurrentNeoDate, setStartDate, setApod, handleError } from '../../actions';
import './App.css';
import PropTypes from 'prop-types';

export class App extends Component {

  async componentDidMount() {
    const { handleError, isLoading } = this.props
    try {
      this.getApod();
      this.saveNeosHelper();
    } catch (error) {
      isLoading(false);
      handleError(error.message);
    }
    
  }

  startDateHelper = async (date) => {
    const { setStartDate } = this.props;
    const startOfWeek = formatDateForFetch(date)
    setStartDate(startOfWeek)
    this.saveNeosHelper(startOfWeek)
  }

  saveNeosHelper = async (startDate) => {
    const { setNeos, setTotalNeos, setPrevWeek, setNextWeek, isLoadingNeos, handleError} = this.props;
    try {
      isLoadingNeos(true)
      if (startDate === undefined) {
        startDate = formatDateForFetch()
      } 
      var endDate = findEndOfWeek(startDate);
      const neos = await fetchNEO(startDate, endDate);
      const cleanNeos = cleanNeoData(neos);
      setPrevWeek(neos.links.prev)
      setTotalNeos(neos.element_count)
      setNextWeek(neos.links.next)
      setNeos(cleanNeos)
      isLoadingNeos(false)
    } catch(error) {
      handleError(error.message)
    }
    
  }
  
  getApod = async() => {
    const { setApod, handleError, } = this.props
    try {
      const backgroundImg = await fetchAPOD();

      const mainStyle = {
        backgroundImage:`url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }
      setApod(mainStyle);
    } catch (error) {
      handleError(error.message)
    }
  }

  displayDateSelectedNeos = (e) => {
    e.preventDefault();
    const { setCurrentNeoDate } = this.props;
    setCurrentNeoDate(e.target.id)
  }
  
  render() {
    const { loadingNeos, errorMessage } = this.props;
   
    return (
      <div className = "App">
        <Route exact path='/(asteroids|)/'  render={ () => 
        <>
          <Header />
          <Nav />
          {!loadingNeos && errorMessage === '' &&  <AsteroidContainer 
          displayDateSelectedNeos={this.displayDateSelectedNeos}
          startDateHelper={this.startDateHelper}/> }
          { errorMessage !== '' && <h5> {errorMessage } </h5> }
        </> }/>

        <Route exact path='/apod' render={ () => 
        <>
          <Header />
          <Nav />
          <ApodContainer />
          {/* {!loadingNeos && errorMessage === '' &&  <ApodContainer /> } */}
          { errorMessage !== '' && <h5> {errorMessage } </h5> }
        </> }/> 
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  loadingNeos: state.loadingNeos,
  errorMessage: state.errorMessage
})

export const mapDispatchToProps = dispatch => ({
  setNeos: neos => dispatch (setNeos(neos)),
  setTotalNeos: totalNeos => dispatch (setTotalNeos(totalNeos)),
  setPrevWeek: prevWeekFetchUrl => dispatch(setPrevWeek(prevWeekFetchUrl)),
  setNextWeek: nextWeekFetchUrl => dispatch(setNextWeek(nextWeekFetchUrl)),
  isLoadingNeos: bool => dispatch(updateLoading(bool)),
  setCurrentNeoDate: date => dispatch(setCurrentNeoDate(date)),
  setStartDate: date => dispatch(setStartDate(date)),
  setApod: apod => dispatch(setApod(apod)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  loadingNeos: PropTypes.bool,
  errorMessage: PropTypes.string,
  setNeos: PropTypes.func,
  setTotalNeos: PropTypes.func,
  setPrevWeek: PropTypes.func,
  setNextWeek: PropTypes.func,
  isLoadingNeos: PropTypes.func,
  setCurrentNeoDate: PropTypes.func,
  setStartDate: PropTypes.func,
  setApod: PropTypes.func,
  handleError: PropTypes.func
}