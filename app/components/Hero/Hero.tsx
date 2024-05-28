'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaPlayCircle } from "react-icons/fa";
import { getData } from '@/lib/Data';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';
import Iframe from '../ListAnime/Iframe';
import Link from "next/link";

type HeroProps = {
    loading: boolean;
    isFetching: boolean;
    data: any;
}

const Hero = ({data, loading, isFetching}:HeroProps) => {
    const [showVideo, setShowVideo] = useState(false);

    const handleButtonClick = () => {
        setShowVideo(prev => !prev);
    };


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
        <div className='bg-glass-morp min-h-[600px] relative flex'>
            <Image
                height={100}
                width={100}
                src={data?.data?.images.webp.large_image_url}
                loader={() => data.data?.images.jpg.large_image_url}
                className='w-screen h-[600px] object-cover absolute top-0 z-[-10]'
                alt=''
                loading='lazy'
                objectFit='cover'
            />
            <div className='h-[600px] w-screen bg-black to-gray-800 opacity-70 absolute top-0 z-[-9]'>
            </div>
            <div className='flex items-center w-full'>
                <div className='flex text-white px-4 justify-around w-full'>
                    <div className='p-4 flex gap-2 flex-col  max-w-[800px]'>
                        <h1 className='text-4xl font-semibold'>{data?.data?.title}</h1>
                        <p>{data?.data?.type} | {data?.data?.source} | {data?.data?.status}</p>
                        <p className='text-xl'>Episode: {data?.data?.episodes} | Release {data?.data?.year}</p>

                        <div className='flex flex-wrap gap-2 mt-2 text-sm text-black font-semibold'>
                            {data?.data?.genres.map((genre: any) => (
                                <div key={genre.mal_id} className='px-4 py-2 bg-white rounded-md'>
                                    {genre.name}
                                </div>
                            ))}
                        </div>

                        <p className='text-sm mt-4 text-gray-300 line-clamp-4'>{data?.data?.synopsis}</p>

                        <div className='mt-3 flex gap-4 items-center'>
                            <button onClick={handleButtonClick} className='px-4 py-2 flex items-center gap-2 hover:bg-white duration-200 hover:border-appRed hover:border-1 font-semibold hover:text-black bg-appRed rounded-md'>
                                <FaPlayCircle className='text-xl' />  {showVideo ? "Stop" : "Play Now"}
                            </button>

                            <Link href={`/anime/${data?.data.mal_id}/episodes`} className={'text-white underline hover:scale-105 duration-300'}>See all episode</Link>
                        </div>

                    </div>
                        <Image
                            height={100}
                            width={100}
                            src={data?.data?.images.webp.large_image_url}
                            loader={() => data.data?.images.jpg.large_image_url}
                            className='w-[300px] h-[400px] md:block hidden object-cover  top-0 z-[10]'
                            alt=''
                            loading='lazy'
                            objectFit='cover'
                        />
                </div>
                {showVideo && (
                    <div className="fixed bottom-0 right-0 m-4 w-[700px] h-[400px] bg-gray-900 z-50 rounded-md">
                        <iframe src={data?.data.trailer.embed_url} className="w-full h-full" title="Video Player" allowFullScreen></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
