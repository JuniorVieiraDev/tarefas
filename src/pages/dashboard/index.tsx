import Head from 'next/head'
import styles from './style.module.css'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Textarea from '@/components/textarea'
import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { db } from '../../services/firebaseConnection'
import { addDoc, collection, query, orderBy, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import Link from 'next/link'



interface HomeProps {
    user: {
        email: string;
    }
}

interface TaskProps {
    id: string,
    created: Date,
    public: boolean,
    user: string,
    tarefa: string
}

const Dashboard = ({ user }: HomeProps) => {

    const [input, setInput] = useState("")
    const [publicTask, setPublicTask] = useState(false)
    const [task, setTask] = useState<TaskProps[]>([])

    async function handleShare(id: string) {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/task/${id}`)
        alert("URL copiada")
    }

    useEffect(() => {

        async function loadTarefas() {

            const tarefasRef = collection(db, "tarefas")

            const q = query(
                tarefasRef,
                orderBy("created", "desc"),
                where("user", "==", user?.email)
            )

            onSnapshot(q, (snapshot) => {
                let lista = [] as TaskProps[]

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        tarefa: doc.data().tarefa,
                        created: doc.data().created,
                        user: doc.data().user,
                        public: doc.data().public
                    })
                })

                setTask(lista)
            })

        }

        loadTarefas()

    }, [user?.email])

    function handleChangePublic(e: ChangeEvent<HTMLInputElement>) {
        setPublicTask(e.target.checked)
    }

    async function handleRegisterTaks(e: FormEvent) {
        e.preventDefault()

        if (input === '') return

        try {
            await addDoc(collection(db, "tarefas"), {
                tarefa: input,
                created: new Date(),
                user: user?.email,
                public: publicTask
            })

            setInput("")
            setPublicTask(false)

        } catch (error) {
            console.log(error)
        }
    }

    async function handleDeleteTask(id: string) {
        const docRef = doc(db, "tarefas", id)

        await deleteDoc(docRef)
    }

    return (
        <div className={styles.container}>
            <Head><title>Meu Painel</title></Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        <form onSubmit={handleRegisterTaks}>
                            <Textarea
                                placeholder='Digite sua tarefa'
                                value={input}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                            />

                            <div className={styles.checkboxArea}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />
                                <label>Marcar como pública (clique no texto para se redirecionado ou em compartilhar para copiar o link)</label>
                            </div>

                            <button type='submit' className={styles.button}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>

                    <h2>Minhas Tarefas</h2>



                    {task.map((item) => (
                        <article className={styles.task} key={item.id}>
                            {item.public && (
                                <div className={styles.tagContainer}>
                                    <label className={styles.tag}>PUBLICA</label>
                                    <button className={styles.shareButton} onClick={() => handleShare(item.id)}>
                                        <FiShare2
                                            size={22}
                                            color='#5B92FA'
                                        />
                                    </button>
                                </div>
                            )}

                            <div className={styles.taskContent}>

                                {item.public ? (
                                    <Link href={`/task/${item.id}`}>
                                        <p>{item.tarefa}</p>
                                    </Link>
                                ) : (
                                    <p>{item.tarefa}</p>
                                )}

                                <button className={styles.trashButton} onClick={() => handleDeleteTask(item.id)}>
                                    <FaTrash
                                        size={24}
                                        color='#fa5b5bff'
                                    />
                                </button>
                            </div>
                        </article>

                    ))}

                </section>
            </main>

        </div>
    )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req })

    if (!session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            user: {
                email: session?.user?.email
            }
        },
    }
}