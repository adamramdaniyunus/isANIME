import Layout from '@/app/components/Layout'
import ListAnime from '@/app/components/ListAnime/ListAnime'
import SearchPage from '@/app/components/SearchPage'
import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import Head from "next/head";

export const metadata = {
    title: "Search - IsAnime",
};

const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <SearchPage />
        </>
    )
}

export default page
