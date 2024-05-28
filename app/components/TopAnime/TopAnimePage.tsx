'use client'

import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoadingCards from "@/app/components/LoadingCards";
import AnimeCards from "@/app/components/AnimeCards";
import Pagination from "@/app/components/Pagination";
import QueryTopAnime from "@/app/QueryTopAnime";
import Layout from "@/app/components/Layout";

export default function TopAnimePage() {
    const params = useParams();
    const router = useRouter();
    const { animes, loading, isFetching, refetch } = QueryTopAnime();
    const totalPages = animes?.pagination.items.total;
    const currentPage = parseInt(params.page as string);

    if (loading || isFetching) {
        return (
            <LoadingCards />
        );
    }


    const handleChangeNumber = (number: number) => {
        router.push(`/anime-top/${number}`);
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl ml-4'>Top Anime</h1>
                </div>
                <AnimeCards animes={animes.data} />

                <Pagination totalPages={totalPages} currentPage={currentPage} handleChangeNumber={handleChangeNumber} />
            </div>
        </div>
    );
}
