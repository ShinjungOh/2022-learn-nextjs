import Head from 'next/head';
import {siteTitle} from '../pages/_document';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";
import Link from 'next/link';
import Date from '@components/Date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        }
    }
}

export default function Home({allPostsData}) {

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello World</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
                <button className="rounded bg-red-400 white mt-3 mb-5 px-2">
                    <Link href="/post/write"><a>Write</a></Link>
                </button>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {
                        allPostsData.map(({id, date, title}) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title || 'untitled'}</a>
                                </Link>
                                <br/>
                                <small className={utilStyles.lightText}>
                                    {
                                        date ? <Date dateString={date}/> : ''
                                    }
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    );
}
