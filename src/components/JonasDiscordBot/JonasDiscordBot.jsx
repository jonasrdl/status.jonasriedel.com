const PORT = 55689
const URL = `http://localhost:${PORT}`

const isOnline = () => {
  fetch(`${URL}/isOnline`, (req, res) => {
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