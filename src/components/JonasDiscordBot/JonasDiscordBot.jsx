import axios from 'axios'
import React from 'react'

class JonasDiscordBot extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onlineData: [],
      DataisLoaded: false
    }
  }

  componentDidMount() {
    axios.get('https://status.jonasriedel.com/api/jonasdiscordbot')
      .then((result) => {
        this.setState({
          onlineData: result.data,
          DataisLoaded: true
        })
      })
  }

  render() {
    const { DataisLoaded, onlineData } = this.state
    let botOnlineStatus;

    if (!DataisLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    if (this.state.onlineData === 'OK') {
      botOnlineStatus = 'Bot is online!'
      
      return (
        <div>
          <p className="discord">Discord Bot <i class="fab fa-discord"></i></p>
          <p className="onlineStatus" style={{ color: 'green' }}>{botOnlineStatus} <i class="fas fa-check"></i></p>
        </div>
      )
    } else {
      botOnlineStatus = 'Bot is offline!'

      return (
        <div>
          <p className="discord">Discord Bot <i class="fab fa-discord"></i></p>
          <p className="onlineStatus" style={{ color: 'red' }}>{botOnlineStatus} <i class="fas fa-times"></i></p>
        </div>
      )  
    }
  }
}

export default JonasDiscordBot 