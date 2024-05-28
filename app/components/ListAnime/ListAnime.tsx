'use client'

import React from 'react';
import Movie from './Movie';
import UpComing from './UpComing';
import RecommendedAnime from './RecommendedAnime';


const ListAnime = () => {
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
        <div className='flex flex-col'>
            <div className='mt-4 p-4'>
               <RecommendedAnime handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>

                <Movie handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />

                <UpComing handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            </div>
        </div>
    );
};

export default ListAnime;
