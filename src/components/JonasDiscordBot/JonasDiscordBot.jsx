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
          <p>Discord Bot:</p>
          <p style={{ color: 'green' }}>{botOnlineStatus}</p>
        </div>
      )
    } else {
      botOnlineStatus = 'Bot is offline!'

      return (
        <div>
          <p>Discord Bot:</p>
          <p style={{ color: 'red' }}>{botOnlineStatus}</p>
        </div>
      )  
    }
  }
}

export default JonasDiscordBot 