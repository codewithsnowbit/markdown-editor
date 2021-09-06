import React from 'react'
import Heading from './Heading'
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Heading />
        <MainContent />
        <Footer/>
      </div>
    )
  }
}

export default App;
