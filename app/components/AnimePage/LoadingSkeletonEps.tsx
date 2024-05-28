import Skeleton from "react-loading-skeleton";
import React from "react";

export default function LoadingSkeletonEps(){
    return (
        <div>
            {Array.from({length: 10}).map((_, i) => (
                <div key={i} className={'flex p-4 max-w-[500px] gap-2 hover:scale-110 duration-300'}>
                    <Skeleton
                        className={'w-[100px] h-[150px]'}
                        height={100}
                        width={100}
                        baseColor="#202020" // warna dasar skeleton
                        highlightColor="#444" // warna highlight skeleton
                    />
                    <div className={'flex flex-col'}>
                        <Skeleton height={20} width={`80%`} baseColor="#202020" highlightColor="#444"/>
                        <Skeleton height={15} width={`90%`} baseColor="#202020" highlightColor="#444"/>
                        <Skeleton height={15} width={`70%`} baseColor="#202020" highlightColor="#444"/>
                    </div>
                </div>
            ))}
        </div>
    )
}