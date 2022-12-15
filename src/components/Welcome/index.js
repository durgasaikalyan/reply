// Write your code here
import {Component} from 'react'
import './App.css'

class Welcome extends Component {
  state = {Subscribe: true}

  render() {
    const {Subscribe} = this.state
    let subscribeButton
    if (Subscribe) {
      subscribeButton = <button>Subscribed</button>
    } else {
      subscribeButton = <button>Subscribe</button>
    }
    return (
      <div className="container">
        <h1>Welcome</h1>
        <button onClick={subscribeButton}>Subscribed</button>
      </div>
    )
  }
}

export default Welcome
