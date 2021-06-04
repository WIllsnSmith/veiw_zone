import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  const handleGameClick = () => {
    return {
      wordCount: 10,
      letterCount: 4,
      speedCount: 1.3
    }
  }

  const handleSpeedChange = (oper) => {
    let speed = 1;
    if(oper === "+") {
      speed =+ 0.5;
    }
    if(oper === "-") {
      speed =- 0.5;
    }
   return oper;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>View Zone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>

        <p className={styles.description}>
          Тренажер "Поле зрения"
        </p>

        <div className={styles.grid}>
        <span className={styles.card}>
            <h2>Сколько слов за игру</h2>
            <input type="range" min="10" max="67" defaultValue="20" name="words"/>
        </span>

          <span className={styles.card}>
            <h2>Сколько букв в словах</h2>
            <input type="range" min="3" max="16" defaultValue="4" name="word_count"/>
          </span>

          <span className={styles.card}>
            <h2>Скорость</h2>
            <input type="text" readOnly defaultValue="1"/>
            <button onClick={handleSpeedChange("+")}>+</button>
            <button onClick={handleSpeedChange("-")}>-</button>
          </span>

          <Link href="/game">
            <button onClick={handleGameClick}>
                Старт
            </button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}