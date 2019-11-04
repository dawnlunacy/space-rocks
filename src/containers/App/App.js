
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading, setCurrentNeoDate, setStartDate, setApod, handleError } from '../../actions';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    const { handleError, isLoading } = this.props
    try {
      this.getApod();
      this.saveNeosHelper();
    } catch (error) {
      isLoading(false);
      handleError("There was an error loading the NEAR EARTH OBJECTS from NASA. Try again or look outside for incoming asteroids or comets.")
    }
    
  }

  startDateHelper = async (date) => {
    const { setStartDate } = this.props;
    const startOfWeek = formatDateForFetch(date)
    setStartDate(startOfWeek)
    this.saveNeosHelper(startOfWeek)
  }

  saveNeosHelper = async (startDate) => {
    const { setNeos, setTotalNeos, setPrevWeek, setNextWeek, isLoadingNeos} = this.props;
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
    
  }
  
  getApod = async() => {
    const { setApod } = this.props
    const backgroundImg = await fetchAPOD();

    const mainStyle = {
      backgroundImage:`url(${backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }
    setApod(mainStyle);
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
        <Header />
        <Nav />
        {!loadingNeos && errorMessage === '' &&  <AsteroidContainer 
          displayDateSelectedNeos={this.displayDateSelectedNeos}
          startDateHelper={this.startDateHelper}/> }
        { errorMessage !== '' && <p> {errorMessage }</p> }
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