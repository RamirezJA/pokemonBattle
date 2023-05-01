import styles from "../styles/win.module.css"
import Link from "next/link"

export default function Win(props) {
  return (
    <>
      <div className={styles.main}>
        <div> {props.result}</div>
      </div>
    </>
  )
}
