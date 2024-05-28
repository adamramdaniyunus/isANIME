'use client'
import React, { useEffect, useState } from 'react'
import {useParams, useRouter} from 'next/navigation'
import LoadingCards from '../LoadingCards'
import AnimeCards from '../AnimeCards'
import { useQuery } from '@tanstack/react-query'
import QuerySearch from "@/app/QuerySearch";
import Pagination from "@/app/components/Pagination";

const ListSearchAnime = () => {
    const params = useParams()
    const router = useRouter()
    const formattedKeyword = decodeURIComponent(params.keyword as string).replace(/ /g, ' ');
    const {animes, loading, isFetching, refetch} = QuerySearch()
    const totalPages = animes?.pagination.items.total;
    const currentPage = parseInt(params.page as string) || 1

    useEffect(()=>{
        if(params.keyword){
            refetch()
        }
    },[refetch, params])

    if (loading || isFetching) {
        return (
            <LoadingCards/>
        );
    }

    const handleChangeNumber = (number: number) => {
        router.push(`/search/${params.keyword}/${number}`)
    }

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl ml-4'>Search results from {formattedKeyword}</h1>
                </div>
                {!animes?.data.length && <div className={'p-4 h-screen'}>
                    No data for anime with name {formattedKeyword} in page {params.page}
                </div>}
                <AnimeCards animes={animes.data}/>

                <Pagination totalPages={totalPages} currentPage={currentPage}  handleChangeNumber={handleChangeNumber}/>
            </div>
        </div>
    )
}

export default ListSearchAnime
