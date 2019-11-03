
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData, isEmpty } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek, updateLoading } from '../../actions';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: null
    }
  }

  async componentDidMount() {
    const { setNeos, setTotalNeos, setPrevWeek, setNextWeek, isloadingNeos } = this.props;
    this.getApod();
    const defaultStartDate = formatDateForFetch();
    const defaultEndDate = findEndOfWeek(defaultStartDate)
    const neos = await fetchNEO(defaultStartDate, defaultEndDate);
    const cleanNeos = cleanNeoData(neos);
    setPrevWeek(neos.links.prev)
    setTotalNeos(neos.element_count)
    setNextWeek(neos.links.next)
    setNeos(cleanNeos)
    isloadingNeos(false)
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
  
  render() {
    const { loadingNeos, neos } = this.props;
    console.log("line 48 app", !isEmpty(neos))
    console.log("line 49 app", neos)


    return (
      <div className = "App">
        <Header />
        <Nav />
        console.log
        {!loadingNeos && !isEmpty(neos) && <AsteroidContainer image={this.state.apod}/> }
      </div>
    )
  }
}

// export default App;


const mapStateToProps = (state) => ({
  neos: state.neos,
  loadingNeos: state.loadingNeos

})

const mapDispatchToProps = dispatch => ({
  setNeos: neos => dispatch (setNeos(neos)),
  setTotalNeos: totalNeos => dispatch (setTotalNeos(totalNeos)),
  setPrevWeek: prevWeekFetchUrl => dispatch(setPrevWeek(prevWeekFetchUrl)),
  setNextWeek: nextWeekFetchUrl => dispatch(setNextWeek(nextWeekFetchUrl)),
  isloadingNeos: bool => dispatch(updateLoading(bool))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);