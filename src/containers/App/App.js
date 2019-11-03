
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import AsteroidContainer from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek, cleanNeoData } from '../../utils/helpers';
import { setNeos, setTotalNeos, setPrevWeek, setNextWeek } from '../../actions';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: null
    }
  }

  async componentDidMount() {
    const { setNeos, setTotalNeos, setPrevWeek, setNextWeek } = this.props;
    this.getApod();
    const defaultStartDate = formatDateForFetch();
    const defaultEndDate = findEndOfWeek(defaultStartDate)
    const neos = await fetchNEO(defaultStartDate, defaultEndDate);
    const cleanNeos = cleanNeoData(neos);
    setPrevWeek(neos.links.prev)
    setTotalNeos(neos.element_count)
    setNextWeek(neos.links.next)
    setNeos(cleanNeos)
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
    return (
      <div className = "App">
        <Header />
        <Nav />
        <AsteroidContainer image={this.state.apod}/>
      </div>
    )
  }
}

// export default App;


// const mapStateToProps = (state) => ({
//   neos: state.neos
// })

const mapDispatchToProps = dispatch => ({
  setNeos: neos => dispatch (setNeos(neos)),
  setTotalNeos: totalNeos => dispatch (setTotalNeos(totalNeos)),
  setPrevWeek: prevWeekFetchUrl => dispatch(setPrevWeek(prevWeekFetchUrl)),
  setNextWeek: nextWeekFetchUrl => dispatch(setNextWeek(nextWeekFetchUrl))
  })

export default connect(null, mapDispatchToProps)(App);