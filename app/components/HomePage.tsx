'use client'

import React from 'react'
import Layout from './Layout'
import ListAnime from './ListAnime/ListAnime'
import Hero from './Hero/Hero'
import { useRouter } from 'next/navigation'
import {useQuery} from "@tanstack/react-query";
import {getData} from "@/lib/Data";
import QueryIdAnime from "@/app/QueryIdAnime";

const HomePage = () => {
    const {data, loading, isFetching} = QueryIdAnime()

    return (
        <Layout>
            <Hero loading={loading} isFetching={isFetching} data={data}/>
            <ListAnime />
        </Layout>
    )
}

export default HomePage
