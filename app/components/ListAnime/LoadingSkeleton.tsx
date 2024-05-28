import { settings } from '@/lib/Settings'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Slider from 'react-slick'

const LoadingSkeleton = () => {
    return (
        <div className='flex flex-col'>
            <div className='mt-4 p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl ml-4'>Loading...</h1>
                    <button className='text-appRed underline px-4 py-2 rounded-md'>See More</button>
                </div>
                <div className='mx-4'>
                    <Slider {...settings}>
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className='p-4 flex flex-col'>
                                <Skeleton
                                    height={200}
                                    width={200}
                                    baseColor="#202020" // warna dasar skeleton
                                    highlightColor="#444" // warna highlight skeleton
                                />
                                <div className='mt-2 flex gap-2 flex-col'>
                                    <Skeleton height={20} width={`80%`} baseColor="#202020" highlightColor="#444" />
                                    <Skeleton height={15} width={`90%`} baseColor="#202020" highlightColor="#444" />
                                    <Skeleton height={15} width={`70%`} baseColor="#202020" highlightColor="#444" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton
