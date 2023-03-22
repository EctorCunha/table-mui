import Link from "next/link";
import BasicModal from "../components/modal";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href={"/table"}>Tabela</Link>
      <BasicModal/>
    </div>
  )
}

