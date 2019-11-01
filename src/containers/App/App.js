
import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { AsteroidContainer } from '../AsteroidContainer/AsteroidContainer';
import { fetchAPOD } from '../../utils/apiCalls'
// import Funcname from '../Funcname/Funcname';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    }
  }

  componentDidMount() {
    this.getApod();
  }
  
  getApod = async() => {
    const backgroundImg = await fetchAPOD();
    console.log("HMM", backgroundImg)
    // const mainStyle = {
    //   backgroundImage:`url(${backgroundImg})`,
    //   backgroundSize: 'cover',
    //   background: 'no-repeat',
    //   backgroundPosition: 'center center'
    // }
    const mainStyle2 = {
      backgroundImage:`url(${backgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }
    this.setState({image: mainStyle2})
    console.log("IMAGE", this.state.image)
}
  
  render() {
    return (
      <div className = "App">
        <Header />
        <Nav />
        <AsteroidContainer image={this.state.image}/>
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