const PORT = 55689
const IP = '172.17.0.1'
const URL = `http://${IP}:${PORT}`
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