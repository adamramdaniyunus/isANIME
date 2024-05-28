'use client'

import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getData} from "@/lib/Data";
import Hero from "@/app/components/Hero/Hero";
import Image from "next/image";
import ListAnime from "@/app/components/ListAnime/ListAnime";
import {MdOutlineStarBorder} from "react-icons/md";
import React, {useEffect} from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import DetailAnime from "@/app/components/AnimePage/DetailAnime";
import QueryIdAnime from "@/app/QueryIdAnime";

export default  function AnimePage(){
    const params = useParams()
    const {data, refetch, loading, isFetching} = QueryIdAnime()

    useEffect(()=>{
        if(params.ml_id) {
            refetch()
        }
    },[refetch])

    return(
        <div>
            <Hero loading={loading} isFetching={isFetching} data={data}/>

         {/*<DetailAnime data={data} loading={loading} isFetching={isFetching}/>*/}

            <ListAnime/>

        </div>
    )
}