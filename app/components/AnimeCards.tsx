import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Iframe from './ListAnime/Iframe';
import { MdOutlineStarBorder } from 'react-icons/md';

const AnimeCards = ({animes}:{animes:any}) => {
    const handleMouseEnter = (e: any, trailerUrl: string) => {
        const iframe = e.currentTarget.querySelector('iframe');
        if (iframe) {
            iframe.src = trailerUrl;
        }
    };

    const handleMouseLeave = (e: any) => {
        const iframe = e.currentTarget.querySelector('iframe');
        if (iframe) {
            iframe.src = '';
        }
    };
  return (
      <div className='flex flex-wrap justify-center'>
          {animes?.map((anime: any, i: number) => (
              <Link
                  href={`/anime/${anime.mal_id}`} key={i} className='hover:scale-110 max-w-[300px] duration-200 p-4 flex flex-col relative'>
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
      </div>
  )
}

export default AnimeCards
