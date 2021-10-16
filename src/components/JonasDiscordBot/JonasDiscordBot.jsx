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
    console.log("Component did mount")

    fetch('https://status.jonasriedel.com/api/jonasdiscordbot')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          onlineData: json,
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
        {
          onlineData.map((item) => (
            <p>{item}</p>
          ))
        }
      </div>
    )
  }
}

export default JonasDiscordBot 






/* const API = `http://status.jonasriedel.com/api`
const axios = require('axios')

const isOnline = (callback) => {
  axios.default.get(`${API}/jonasdiscordbot`).then((result) => {
    let websiteOnline = result.data

    callback(websiteOnline)
  })
}

const JonasDiscordBot = (props) => {
  return (
    <>
      <p>JonasDiscordBot</p>

      <p>
      { isOnline((websiteOnline) => {
        websiteOnline
      }) }
      </p>

      <p>{props.content}</p>
    </>
  )
}
*/