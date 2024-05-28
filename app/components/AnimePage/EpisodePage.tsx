'use client'

import QueryIdAnime from "@/app/QueryIdAnime";
import Hero from "@/app/components/Hero/Hero";
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getData, getDataEpisode} from "@/lib/Data";
import Image from "next/image";
import EpisodeData from "@/app/components/AnimePage/EpisodeData";
import ListAnime from "@/app/components/ListAnime/ListAnime";
import {useEffect} from "react";

const EpisodePage = () => {
    const params = useParams()
    const {data, loading, isFetching} = QueryIdAnime()


    const {
        data:episodes,
        isLoading:loadingEpisode,
        isFetching:fetchingEpisode,
        refetch:refetchEpisode}
        = useQuery({
        queryFn: () => getDataEpisode(parseInt(params.ml_id as string)),
        queryKey: ["episodes"],
        staleTime: 30 * 60 * 1000
    })

    useEffect(() => {
        if(params.ml_id){
            refetchEpisode()
        }
    }, [params, refetchEpisode]);

    return(
        <div>
            <Hero loading={loading} data={data} isFetching={isFetching}/>
            <h1 className={'text-2xl font-poetsen ml-20 mt-8'}>Episodes</h1>
            <div className={'flex flex-wrap gap-2 justify-center'}>
                {episodes?.data.map((episode:any, i:number)=>(
                   <EpisodeData fetching={fetchingEpisode} loading={loadingEpisode} episode={episode} data={data} key={i}/>
                ))}
            </div>

            <ListAnime/>

        </div>
    )
}

export default EpisodePage;