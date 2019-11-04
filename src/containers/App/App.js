
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading, setCurrentNeoDate, setStartDate } from '../../actions';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: null,
    }
  }

  async componentDidMount() {
    const { setNeos, setTotalNeos, setPrevWeek, setNextWeek, isLoadingNeos} = this.props;
    this.getApod();
    const defaultStartDate = formatDateForFetch();
    const defaultEndDate = findEndOfWeek(defaultStartDate)
    const neos = await fetchNEO(defaultStartDate, defaultEndDate);
    const cleanNeos = cleanNeoData(neos);
    setPrevWeek(neos.links.prev)
    setTotalNeos(neos.element_count)
    setNextWeek(neos.links.next)
    setNeos(cleanNeos)
    isLoadingNeos(false)
  }

  startDateHelper = async (date) => {
    const { setStartDate } = this.props;
    const startOfWeek = formatDateForFetch(date)
    setStartDate(startOfWeek)
    this.saveNeosHelper(startOfWeek)
  }

  saveNeosHelper = async (startDate) => {
    const { isLoadingNeos, setNeos } = this.props;
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
    const backgroundImg = await fetchAPOD();

    const mainStyle = {
      backgroundImage:`url(${backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }
    this.setState({apod: mainStyle})
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
          image={this.state.apod} 
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
  setStartDate: date => dispatch(setStartDate(date))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);