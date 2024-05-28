import Image from "next/image";
import {MdOutlineStarBorder} from "react-icons/md";
import Link from "next/link";
import React from "react";
import {useParams} from "next/navigation";
import Skeleton from "react-loading-skeleton";

export default function DetailAnime({data, loading, isFetching}: {data:any, loading:boolean, isFetching:boolean}){
    const params = useParams()

    if (loading || isFetching) {
        return (
            <Skeleton
                height={600}
                width={"100%"}
                baseColor="#202020"
                highlightColor="#444"
            />
        )
    }

    return (
        <div className={'p-4 flex justify-center gap-2 md:flex-row flex-col'}>
            <Image src={data?.data.images.jpg?.image_url} loading={'lazy'}
                   loader={() => data?.data.images.jpg?.image_url} alt={'Images'} width={100} height={100}
                   className={'h-[400px] w-[300px]'}/>
            <div className={'flex flex-col'}>
                <h1 className={'text-2xl font-semibold font-poetsen'}>Synopsis</h1>

                <div className={'flex gap-2'}>{data?.data.titles.map((title: any) => (
                    <h1 key={title.type} className={'text-md'}>{title.title}</h1>
                ))}</div>

                <p className={'text-gray-400'}>{data?.data.synopsis}</p>

                <div className={'mt-4 flex flex-col'}>
                    <p className={"flex items-center gap-1"}>Rating: {data?.data.score} <MdOutlineStarBorder
                        className='text-2xl'/></p>
                    <Link href={`${params.ml_id}/episodes`} className={'text-appRed underline'}>See all Episode</Link>
                </div>

            </div>
        </div>
    )
}