// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    secoends: 0,
    isRunning: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.counter, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  counter = () => {
    const {secoends, isRunning} = this.state

    if (secoends === 59 && isRunning === true) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        secoends: 0,
      }))
    }

    if (isRunning === true) {
      this.setState(prevState => ({secoends: prevState.secoends + 1}))
    }
  }

  onClickStartBtn = () => {
    this.setState({isRunning: true})
  }

  onClickStopBtn = () => {
    this.setState({isRunning: false})
  }

  onClickResetBtn = () => {
    this.setState({isRunning: false, minutes: 0, secoends: 0})
  }

  render() {
    const {minutes, secoends} = this.state

    const dmin = minutes < 10 ? `0${minutes}` : minutes
    const dsec = secoends < 10 ? `0${secoends}` : secoends

    return (
      <div className="bg">
        <h1 className="head">Stopwatch</h1>
        <div className="card">
          <div className="h2-con">
            <img
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            />
            <p className="para"> Timer</p>
          </div>
          <div>
            <h1 className="count">
              {dmin}:{dsec}
            </h1>
            <div>
              <button
                onClick={this.onClickStartBtn}
                className="cusbtn"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onClickStopBtn}
                className="cusbtn1"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onClickResetBtn}
                className="cusbtn2"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
