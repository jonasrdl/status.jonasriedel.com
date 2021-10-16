import axios from "axios"
import React from "react"

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

    if (!DataisLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        {this.state.onlineData}
      </div>
    )
  }
}

export default JonasDiscordBot 