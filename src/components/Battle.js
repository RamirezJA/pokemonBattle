import styles from "../styles/battle.module.css"
import fire from "../../public/fire.png"
import grass from "../../public/grass.png"
import water from "../../public/water-drop.png"
import ball from "../../public/pokeball.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import "animate.css"
import Win from "./Win"
import { useRef } from "react"

export default function Battle() {
  const [firstChoice, setFirstChoice] = useState("")
  const [secondChoice, setSecondChoice] = useState("")
  const [pokeName1, setPokeName1] = useState("")
  const [pokeName2, setPokeName2] = useState("")
  const [result, setResult] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [img, setImg] = useState("")
  const [active, setActive] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/pokemon")
      const data = await response.json()
      setPokeName1(data.data)
      setPokeName2(data.data2)
    }
    fetchData()
  }, [])

  const name1 = pokeName1.name
  const name2 = pokeName2.name

  const handleFirstChoice = (choice) => {
    setFirstChoice(choice)
    //console.log(choice)
  }

  const handleSecondChoice = (choice) => {
    setSecondChoice(choice)
  }

  const compareChoices = () => {
    const winners = {
      fire: "grass",
      water: "fire",
      grass: "water",
    }

    if (!firstChoice && !secondChoice) {
      console.log("Pick both choices")
      setResult("Pick both choices!")
    } else if (firstChoice === secondChoice) {
      console.log("Tie game!")
      setResult("Tie game!")
    } else if (winners[firstChoice] === secondChoice) {
      console.log(`${firstChoice} beats ${secondChoice}!`)
      setResult(`${pokeName1.name} wins!`)
      setImg(pokeName1.sprites.front_default)
    } else {
      console.log(`${secondChoice} beats ${firstChoice}!`)
      setResult(`${pokeName2.name} wins!`)
      setImg(pokeName2.sprites.front_default)
    }

    setIsVisible(!isVisible)
    if (!isVisible) {
      window.location.reload()
    }
  }
  const fireRef = useRef(null)

  function activeFunc(event) {
    //console.log(event)
    const fireElement = fireRef.current
    const element = document.getElementById("fire1")
    //console.log(fireElement.classList)
    if (fireElement.className.includes("one")) {
      fireElement.classList.toggle(styles.active)
    }
  }

  return (
    <>
      <div className={styles.container}>
        {isVisible ? (
          <>
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
                <button
                  id='fire1'
                  ref={fireRef}
                  className={`${styles.fire} one`}
                  onClick={() => {
                    handleFirstChoice()
                    activeFunc()
                  }}
                >
                  <Image src={fire} alt='fire icon' width={50} height={50} />
                </button>
                <div
                  className={styles.water}
                  onClick={() => {
                    handleFirstChoice("water")
                    // activeFunc()
                  }}
                >
                  <Image src={water} alt='water icon' width={50} height={50} />
                </div>
                <div
                  className={styles.grass}
                  onClick={() => {
                    handleFirstChoice("grass")
                    //activeFunc()
                  }}
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
                  className={`${styles.fire2} ${active ? styles.active : ""}`}
                  onClick={() => {
                    handleSecondChoice("fire")
                    //activeFunc()
                  }}
                >
                  <Image src={fire} alt='fire icon' width={50} height={50} />
                </div>
                <div
                  className={`${styles.water2} ${active ? styles.active : ""}`}
                  onClick={() => {
                    handleSecondChoice("water")
                    //activeFunc()
                  }}
                >
                  <Image src={water} alt='water icon' width={50} height={50} />
                </div>
                <div
                  className={`${styles.grass2} ${active ? styles.active : ""}`}
                  onClick={() => {
                    handleSecondChoice("grass")
                    //activeFunc()
                  }}
                >
                  <Image src={grass} alt='grass icon' width={50} height={50} />
                </div>
              </div>
            </div>
            <div className={styles.win}>
              <div>hello</div>
            </div>
          </>
        ) : (
          <Win result={result} img={img}></Win>
        )}
        {isVisible ? (
          <div className={styles.battle} onClick={() => compareChoices()}>
            <div> Battle</div>
            <Image src={ball} alt='ball' width={100} height={100} />
          </div>
        ) : (
          <div className={styles.battle} onClick={() => compareChoices()}>
            Play Again?
          </div>
        )}
      </div>
    </>
  )
}
