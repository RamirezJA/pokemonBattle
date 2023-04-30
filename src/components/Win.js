import styles from "../styles/win.module.css"

export default function Win(props) {
  return (
    <>
      <div className={styles.main}>
        {props.name1} vs {props.name2}
      </div>
    </>
  )
}
