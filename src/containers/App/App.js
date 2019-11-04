
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading, setCurrentNeoDate, setStartDate, setApod } from '../../actions';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    this.getApod();
    this.saveNeosHelper();
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
    console.log("apod", mainStyle)
    setApod(mainStyle);
  }

  displayDateSelectedNeos = (e) => {
    e.preventDefault();
    const { setCurrentNeoDate } = this.props;
    setCurrentNeoDate(e.target.id)
  }
  
  render() {
    const { loadingNeos } = this.props;
   
    return (
      <div className = "App">
        <Header />
        <Nav />
        {!loadingNeos && <AsteroidContainer 
          displayDateSelectedNeos={this.displayDateSelectedNeos}
          startDateHelper={this.startDateHelper}/> }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  loadingNeos: state.loadingNeos
})

export const mapDispatchToProps = dispatch => ({
  setNeos: neos => dispatch (setNeos(neos)),
  setTotalNeos: totalNeos => dispatch (setTotalNeos(totalNeos)),
  setPrevWeek: prevWeekFetchUrl => dispatch(setPrevWeek(prevWeekFetchUrl)),
  setNextWeek: nextWeekFetchUrl => dispatch(setNextWeek(nextWeekFetchUrl)),
  isLoadingNeos: bool => dispatch(updateLoading(bool)),
  setCurrentNeoDate: date => dispatch(setCurrentNeoDate(date)),
  setStartDate: date => dispatch(setStartDate(date)),
  setApod: apod => dispatch(setApod(apod))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);