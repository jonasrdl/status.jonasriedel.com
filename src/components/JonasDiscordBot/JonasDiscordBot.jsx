const PORT = 55689
const URL = `http://localhost:${PORT}`
const axios = require('axios')

const isOnline = () => {
  axios.default.get(`${URL}/isOnline`, (req, res) => {
    console.log(res)
  })
}

const JonasDiscordBot = () => {
  isOnline()

  return (
    <p>JonasDiscordBot</p>
  )
}

export default JonasDiscordBot