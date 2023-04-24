export default async function handler(req, res) {
  const randomNum = Math.floor(Math.random() * 150) + 1
  const randomNum2 = Math.floor(Math.random() * 150) + 1

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
  const data = await response.json()

  const response2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNum2}`
  )
  const data2 = await response2.json()
  res.json({ data: data, data2 })
}
