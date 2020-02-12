import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import {NextPage} from 'next'

const IndexPage: NextPage<{ userAgent: string }> = ({userAgent}) => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/catalogs">
                    <a>Catalogos</a>
                </Link>
            </p>
            <div>{userAgent}</div>
        </Layout>
    )
}

IndexPage.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
}

export default IndexPage