import React, {Component} from 'react';
import TemplateCalculator from './components/TemplateCalculator'

class App extends Component{
  state = {
    count : 0
  }





  render() {
    return (
    <div className="calculator">
      <TemplateCalculator />
    </div>
    );
  }
}


export default App;
