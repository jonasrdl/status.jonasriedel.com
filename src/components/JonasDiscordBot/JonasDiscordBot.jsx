import axios from "axios"
import React from "react"
import './JonasDiscordBot.css'

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
    } else {
      botOnlineStatus = 'Bot is offline!'
    }

    return (
      <div>
        <p>{botOnlineStatus}</p>
      </div>
    )
  }
}

export default JonasDiscordBot 