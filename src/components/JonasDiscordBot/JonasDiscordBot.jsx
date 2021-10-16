const API = `http://status.jonasriedel.com/api`
const axios = require('axios')

const isOnline = (callback) => {
  axios.default.get(`${API}/jonasdiscordbot`).then((result) => {
    let websiteOnline = result.data

    callback(websiteOnline)
  })
}

const JonasDiscordBot = () => {
  return (
    <>
      <p>JonasDiscordBot</p>
      <p>{ isOnline((websiteOnline) => {
        websiteOnline
      }) }</p>
    </>
  )
}

export default JonasDiscordBot