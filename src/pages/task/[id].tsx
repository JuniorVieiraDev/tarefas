import Head from "next/head"
import styles from './style.module.css'
import { GetServerSideProps } from "next"

import { db } from '../../services/firebaseConnection'
import { doc, query, collection, where, orderBy, getDoc } from 'firebase/firestore'

interface TaskProps {
    item: {
        tarefa: string,
        created: Date,
        public: boolean,
        user: string,
        taskId: string
    }
}

const Task = ({ item }: TaskProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>

                <article className={styles.task}>
                    <p>{item.tarefa}</p>
                </article>

                

            </main>
        </div>
    )
}

export default Task

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const id = params?.id as string

    const docRef = doc(db, "tarefas", id)

    const snapshot = await getDoc(docRef)

    if (snapshot.data() === undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    if (!snapshot.data()?.public) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const miliseconds = snapshot.data()?.created?.seconds * 1000

    const task = {
        tarefa: snapshot.data()?.tarefa,
        created: new Date(miliseconds).toLocaleDateString(),
        public: snapshot.data()?.public,
        user: snapshot.data()?.user,
        taskId: id
    }

    return {
        props: {
            item: task,
        }
    }
}