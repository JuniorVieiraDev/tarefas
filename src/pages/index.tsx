import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas Plus</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            src={Hero}
            alt="foto de hero"
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br /> seus estudos e tarefas
        </h1>

      </main>

    </div>
  );
}
