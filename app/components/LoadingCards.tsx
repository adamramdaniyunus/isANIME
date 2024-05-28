import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingCards = () => {
  return (
      <div className='flex flex-wrap justify-center'>
          {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className='p-4 max-w-[300px] flex flex-col'>
                  <Skeleton
                      height={200}
                      width={200}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  <div className='mt-2 flex gap-2 flex-col'>
                      <Skeleton height={20} width={`80%`} baseColor="#202020" highlightColor="#444" />
                      <Skeleton height={15} width={`90%`} baseColor="#202020" highlightColor="#444" />
                      <Skeleton height={15} width={`70%`} baseColor="#202020" highlightColor="#444" />
                  </div>
              </div>
          ))}
      </div>
  )
}

export default LoadingCards
