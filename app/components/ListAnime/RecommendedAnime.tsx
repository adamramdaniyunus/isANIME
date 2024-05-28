import { settings } from '@/lib/Settings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import Iframe from './Iframe'
import { getDataRecomended } from '@/lib/Data'
import LoadingSkeleton from './LoadingSkeleton'
import { MdOutlineStarBorder } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'

const RecommendedAnime = ({ handleMouseEnter, handleMouseLeave }: { handleMouseEnter: (e: any, i: string) => void, handleMouseLeave: (e: any) => void }) => {
    const {
        data: animes,
        refetch,
        isFetching,
        isLoading: loading,
    }=useQuery({
        queryFn: ()=>getDataRecomended(1),
        queryKey: ["anime-recomend"],
        staleTime: 30 *60 * 1000
    })

   

    if (loading || isFetching) {
        return (
            <LoadingSkeleton />
        );
    }


  return (
    <div>
          <div className='flex justify-between items-center'>
              <h1 className='text-white text-xl ml-4'>Recommended</h1>
              <Link href={'/anime-top/1'} className='text-appRed underline px-4 py-2 rounded-md'>See More</Link>
          </div>
          <div className='mx-4'>
              <Slider {...settings}>
                  {animes?.data?.map((anime: any, i: number) => (
                      <Link
                          href={`/anime/${anime.mal_id}`} key={i} className='hover:scale-110 duration-200 p-4 flex flex-col relative'>
                          <div onMouseEnter={(e) => handleMouseEnter(e, anime.trailer.embed_url)}
                              onMouseLeave={handleMouseLeave} className="group">
                              <Image

                                  src={anime.images.jpg.large_image_url || ""}
                                  alt="images"
                                  className='h-[200px] w-[200px] group'
                                  width={200}
                                  height={200}
                                  loading='lazy'
                              />
                              {anime.trailer.embed_url && <Iframe />}
                          </div>
                          <div className='mt-2 flex gap-2 flex-col'>
                              <h1>{anime.title}</h1>
                              <p className='line-clamp-1 text-gray-400 text-xs'>{anime.synopsis}</p>
                              <p className='flex gap-1 items-center justify-end'>
                                  <MdOutlineStarBorder className='text-2xl' /> {anime.score}
                              </p>
                          </div>
                      </Link>
                  ))}
              </Slider>
          </div>
    </div>
  )
}

export default RecommendedAnime
