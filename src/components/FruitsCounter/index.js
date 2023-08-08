import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mango = () => {
    this.setState(previousMangoCount => ({
      mangoCount: previousMangoCount.mangoCount + 1,
    }))
  }

  banana = () => {
    this.setState(previousBananaCount => ({
      bananaCount: previousBananaCount.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoCount}</span> mangoes{' '}
            <span className="span">{bananaCount}</span> bananas
          </h1>
          <div className="image-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <br />
              <div className="button-container">
                <button className="button" type="button" onClick={this.mango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <br />
              <div className="button-container">
                <button className="button" type="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
