import styles from "../styles/battle.module.css"
import fire from "../../public/fire.png"
import grass from "../../public/grass.png"
import water from "../../public/water-drop.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import "animate.css"

export default function Battle() {
  const [firstChoice, setFirstChoice] = useState("")
  const [secondChoice, setSecondChoice] = useState("")
  const [pokeName1, setPokeName1] = useState("")
  const [pokeName2, setPokeName2] = useState("")
  const [result, setResult] = useState("")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/pokemon")
      const data = await response.json()
      setPokeName1(data.data)
      setPokeName2(data.data2)
    }
    fetchData()
  }, [])

  const handleFirstChoice = (choice) => {
    setFirstChoice(choice)
    console.log(choice)
  }

  const handleSecondChoice = (choice) => {
    setSecondChoice(choice)
    console.log(choice)
  }

  const compareChoices = () => {
    const container = document.querySelector(`.${styles.container}`)
    const win = document.querySelector(`.${styles.win}`)
    if (container) {
      container.style.display = "none"
      setIsVisible(false)
      win.style.display = "block"
    }

    const winners = {
      fire: "grass",
      water: "fire",
      grass: "water",
    }

    if (firstChoice === secondChoice) {
      console.log("Tie game!")
      setResult("Tie game!")
    } else if (winners[firstChoice] === secondChoice) {
      console.log(`${firstChoice} beats ${secondChoice}!`)
      setResult(`${pokeName1.name} wins!`)
    } else {
      console.log(`${secondChoice} beats ${firstChoice}!`)
      setResult(`${pokeName2.name} wins!`)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.opp1}>
          <div className={styles.name}>{pokeName1.name}</div>
          <div className={styles.player}>
            {pokeName1.sprites?.front_default ? (
              <Image
                src={pokeName1.sprites.front_default}
                alt={pokeName1.name}
                //className='animate__animated animate__shakeY animate__slow animate__infinite'
                width={300}
                height={300}
              />
            ) : (
              <div>No image available</div>
            )}
          </div>
          <div className={styles.options}>
            <div
              className={styles.fire}
              onClick={() => handleFirstChoice("fire", setPlayer1Choice)}
            >
              <Image src={fire} alt='fire icon' width={50} height={50} />
            </div>
            <div
              className={styles.water}
              onClick={() => handleFirstChoice("water", setPlayer1Choice)}
            >
              <Image src={water} alt='water icon' width={50} height={50} />
            </div>
            <div
              className={styles.grass}
              onClick={() => handleFirstChoice("grass", setPlayer1Choice)}
            >
              <Image src={grass} alt='grass icon' width={50} height={50} />
            </div>
          </div>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={styles.opp2}>
          <div className={styles.name}>{pokeName2.name}</div>
          <div className={styles.player}>
            {pokeName2.sprites?.front_default ? (
              <Image
                src={pokeName2.sprites.front_default}
                alt={pokeName2.name}
                //className='animate__animated animate__shakeY animate__slow animate__infinite'
                width={300}
                height={300}
              />
            ) : (
              <div>No image available</div>
            )}
          </div>
          <div className={styles.options}>
            <div
              className={styles.fire}
              onClick={() => handleSecondChoice("fire", setPlayer2Choice)}
            >
              <Image src={fire} alt='fire icon' width={50} height={50} />
            </div>
            <div
              className={styles.water}
              onClick={() => handleSecondChoice("water", setPlayer2Choice)}
            >
              <Image src={water} alt='water icon' width={50} height={50} />
            </div>
            <div
              className={styles.grass}
              onClick={() => handleSecondChoice("grass", setPlayer2Choice)}
            >
              <Image src={grass} alt='grass icon' width={50} height={50} />
            </div>
          </div>
        </div>
        <div className={styles.win}>
          <div>hello</div>
        </div>
        <div className={styles.vs} onClick={() => compareChoices()}>
          Battle
        </div>
      </div>
    </>
  )
}
