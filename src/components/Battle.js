import styles from "../styles/battle.module.css"
import fire from "../../public/fire.png"
import grass from "../../public/grass.png"
import water from "../../public/water-drop.png"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Battle() {
  const [firstChoice, setFirstChoice] = useState("")
  const [secondChoice, setSecondChoice] = useState("")

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
          <div className={styles.name}>Name</div>
          <div className={styles.player}>Player</div>
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
          <div className={styles.name}>Name</div>
          <div className={styles.player}>Player</div>
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
