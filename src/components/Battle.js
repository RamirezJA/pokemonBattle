import styles from "../styles/battle.module.css"
import fire from "../../public/fire.png"
import grass from "../../public/grass.png"
import water from "../../public/water-drop.png"

import Image from "next/image"

export default function Battle() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.opp1}>
          <div className={styles.name}>Name</div>
          <div className={styles.player}>Player</div>
          <div className={styles.options}>
            <div className={styles.fire}>
              <Image
                src={fire}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
            <div className={styles.water}>
              <Image
                src={water}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
            <div className={styles.grass}>
              <Image
                src={grass}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={styles.opp2}>
          <div className={styles.name}>Name</div>
          <div className={styles.player}>Player</div>
          <div className={styles.options}>
            <div className={styles.fire}>
              <Image
                src={fire}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
            <div className={styles.water}>
              <Image
                src={water}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
            <div className={styles.grass}>
              <Image
                src={grass}
                alt='Picture of the author'
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
