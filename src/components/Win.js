import styles from "../styles/win.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Win(props) {
  console.log(props.img)
  return (
    <>
      <div className={styles.main}>
        <div> {props.result}</div>
        <Image src={props.img} width={400} height={400} alt='Pokemon img' />
      </div>
    </>
  )
}
