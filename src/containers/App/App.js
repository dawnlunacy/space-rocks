
import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { AsteroidContainer } from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { findTodaysDate, findEndOfWeek, formatTodaysDate, findDay } from '../../utils/helpers';

// import Funcname from '../Funcname/Funcname';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: null
    }
  }

  async componentDidMount() {
    this.getApod();
    const neos = await fetchNEO();
    console.log("NEOS", neos )
    console.log("today", findTodaysDate())
    console.log("formatting", formatTodaysDate(findTodaysDate()))
    console.log("day", findDay())
    console.log("startDateFormatting", findEndOfWeek())

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

export default App;


// const mapStateToProps = (state) => ({
//   //needs to return an object
//   //the properties in the object become available in props
// })

// const mapDispatchToProps = dispatch => ({
//   //makes updates to global state
//   //returns an object
//   //define a methods that dispatch an action
//   methodName : ( arg ) => dispatch( methodFromStore(arg) ),
//   })

// export default connect(mapStateToProps, mapDispatchToProps)(App);