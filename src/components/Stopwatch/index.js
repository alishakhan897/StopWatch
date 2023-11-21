// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {Minute: 0, WatchStart: false, Second: 0}

  componentWillUnmount = () => {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  ResetButton = () => {
    const {WatchStart} = this.state
    this.setState({Minute: 0, WatchStart: false, Second: 0})
  }

  updateTime = () => {
    this.setState(prev => ({Second: prev.Second + 1}))
  }

  StartButton = () => {
    const {WatchStart} = this.state
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({WatchStart: true})
  }

  StopButton = () => {
    const {WatchStart} = this.state
    this.setState({WatchStart: false})
  }

  Description = () => {
    const {Minute, Second, WatchStart} = this.state
    const TimeMinute = Math.floor(Minute / 60)
    const TimeSecond = Math.floor(Minute % 60)
    const StringifyMinute = TimeMinute > 10 ? Minute : `0${Minute}`
    const StringifySecond = Second > 10 ? Second : `0${Second}`

    return `${StringifyMinute}:${StringifySecond}`
  }

  render() {
    return (
      <div className="main-container">
        <div className="small-container">
          <h1>Smart Watch</h1>
          <div className="card">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="imasges"
                alt="icon"
              />
              <p>Timer</p>
            </div>
            <div className="second-small-container">
              <h1>{this.Description()}</h1>
              <div className="button-container">
                <button type="button" className="button1" onClick="StartButton">
                  Start
                </button>
                <button type="button" className="button2" onClick="StopButton">
                  Stop
                </button>
                <button type="button" className="button3" onClick="ResetButton">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
