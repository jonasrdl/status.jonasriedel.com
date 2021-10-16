import axios from 'axios'
import React from 'react'

class Website extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onlineData: [],
      DataisLoaded: false
    }
  }

  componentDidMount() {
    axios.get('https://status.jonasriedel.com/api/website')
      .then((result) => {
        this.setState({
          onlineData: result.data,
          DataisLoaded: true
        })
      })
  }

  render() {
    const { DataisLoaded, onlineData } = this.state
    let websiteOnlineStatus;

    if (!DataisLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (this.state.onlineData === 200) {
      websiteOnlineStatus = 'Website is online!'
      
      console.log(this.state.onlineData)

      return (
        <div>
          <p className="website">Website <i class="fas fa-globe"></i></p>
          <p className="onlineStatus" style={{ color: 'green' }}>{websiteOnlineStatus} <i class="fas fa-check"></i></p>
        </div>
      )
    } else {
      websiteOnlineStatus = 'Website is offline!'

      return (
        <div>
          <p className="website">Website <i class="fas fa-globe"></i></p>
          <p className="onlineStatus" style={{ color: 'red' }}>{websiteOnlineStatus} <i class="fas fa-times"></i></p>
        </div>
      )  
    }
  }
}

export default Website 