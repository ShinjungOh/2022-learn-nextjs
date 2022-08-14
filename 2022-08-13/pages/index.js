import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getServerSideProps() {
    console.log('server');  // SSR 서버 사이드 렌더링

    return {
        props: {time: new Date().toISOString()}
    }
}

export default function Home({time}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {time}
                </h1>
                <h1><Link href="/csr"><a>CSR</a></Link></h1>
                <h1><Link href="/ssg"><a>SSG</a></Link></h1>
                <h1><Link href="/isr"><a>ISR</a></Link></h1>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
