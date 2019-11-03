
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { AsteroidContainer } from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD, fetchNEO } from '../../utils/apiCalls';
import { formatDateForFetch, findEndOfWeek } from '../../utils/helpers';
import { setNeos } from '../../actions';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      apod: null
    }
  }

  async componentDidMount() {
    const { setNeos } = this.props;
    this.getApod();
    const defaultStartDate = formatDateForFetch();
    const defaultEndDate = findEndOfWeek(defaultStartDate)
    const neos = await fetchNEO(defaultStartDate, defaultEndDate);
    setNeos(neos)
    console.log("NEOS", neos )

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
  setNeos: neos => dispatch (setNeos(neos))
  })

export default connect(null, mapDispatchToProps)(App);