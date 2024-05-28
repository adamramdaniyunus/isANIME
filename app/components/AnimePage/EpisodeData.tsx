import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import React from "react";
import LoadingSkeletonEps from "@/app/components/AnimePage/LoadingSkeletonEps";

export default function EpisodeData({episode, data, loading, fetching} : {episode:any, data:any, fetching:boolean,loading:boolean}) {

    const date = new Date(episode.aired);
    const readableDate = date.toLocaleString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    if(loading||fetching){
        return (
            <LoadingSkeletonEps/>
        )
    }

    return (
        <div className={'flex p-4 max-w-[300px] gap-2 hover:scale-110 duration-300'}>
            <Image src={data?.data.images.jpg.image_url} alt={"images"} className={'w-[100px] h-[150px]'} width={100} height={100}/>
            <div className={'flex flex-col'}>
                <h1 className={'font-poetsen text-lg line-clamp-2'}>{episode.title}</h1>
                <p className={'text-gray-400 text-sm'}>Rate: {episode.score}</p>
                <p className={'text-gray-400 text-sm'}>Date Release: {readableDate}</p>
                {episode.filler && <span className={'text-appRed font-poetsen italic'}>Filler</span>}
            </div>
        </div>
    )
}