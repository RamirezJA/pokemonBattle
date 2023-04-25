import styles from "../styles/battle.module.css"
import fire from "../../public/fire.png"
import grass from "../../public/grass.png"
import water from "../../public/water-drop.png"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Battle() {
  const [firstChoice, setFirstChoice] = useState("")
  const [secondChoice, setSecondChoice] = useState("")
  const [pokeName1, setPokeName1] = useState("")
  const [pokeName2, setPokeName2] = useState("")
  const [pokeArt1, setPokeArt1] = useState("")
  const [pokeArt2, setPokeArt2] = useState("")

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
    const winners = {
      fire: "grass",
      water: "fire",
      grass: "water",
    }

    if (firstChoice === secondChoice) {
      console.log("Tie game!")
    } else if (winners[firstChoice] === secondChoice) {
      console.log(`${firstChoice} beats ${secondChoice}!`)
    } else {
      console.log(`${secondChoice} beats ${firstChoice}!`)
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
              onClick={() => handleFirstChoice("fire")}
            >
              <Image src={fire} alt='fire icon' width={50} height={50} />
            </div>
            <div
              className={styles.water}
              onClick={() => handleFirstChoice("water")}
            >
              <Image src={water} alt='water icon' width={50} height={50} />
            </div>
            <div
              className={styles.grass}
              onClick={() => handleFirstChoice("grass")}
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
              onClick={() => handleSecondChoice("fire")}
            >
              <Image src={fire} alt='fire icon' width={50} height={50} />
            </div>
            <div
              className={styles.water}
              onClick={() => handleSecondChoice("water")}
            >
              <Image src={water} alt='water icon' width={50} height={50} />
            </div>
            <div
              className={styles.grass}
              onClick={() => handleSecondChoice("grass")}
            >
              <Image src={grass} alt='grass icon' width={50} height={50} />
            </div>
          </div>
        </div>
        <div className={styles.vs} onClick={() => compareChoices()}>
          Battle
        </div>
      </div>
    </>
  )
}
