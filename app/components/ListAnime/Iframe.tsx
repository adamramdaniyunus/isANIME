import React from 'react'

const Iframe = () => {
    return (
        <div className='absolute top-0 left-0 w-[240px] h-[200px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50'>
            <iframe
                width="100%"
                height="100%"
                src=""
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    )
}

export default Iframe
