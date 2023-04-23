import styles from "../styles/Nav.module.css"
import Link from "next/link"
import Image from "next/image"
import icon from "../../public/pikachu.png"

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.home}>
            <Link className={styles.link} href='/'>
              PokeBattle
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href='/'>
              <Image
                className={styles.img}
                src={icon}
                alt='icon'
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li className={styles.about}>
            <Link href='/' className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
