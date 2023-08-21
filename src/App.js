import {Component} from 'react'
import LettersCalculator from './components/LettersCalculator'

import './App.css'

class App extends Component {
  state = {count: 0}

  changeNum = v => {
    this.setState({count: v})
  }

  render() {
    const {count} = this.state
    return <LettersCalculator num={count} func={this.changeNum} />
  }
}

export default App
