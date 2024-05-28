
'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Link from "next/link";


const Navbar = () => {
    const router = useRouter()
    const searchRef = useRef<HTMLInputElement>(null);
    const [color, setColor] = useState(false);
    const handleScroll = () => {

        if (window.scrollY > 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    useEffect(() => {
        window?.addEventListener('scroll', handleScroll);
    }, [])


    const handleButtonClick = async () => {
        if (searchRef.current?.value) {
            const keyword = searchRef.current.value;
            await router.push(`/search/${keyword}/1`)
        }
    };


    return (
        <div className={`w-full duration-300 flex p-4 sticky top-0 ${color ? "bg-appRed" : ""} justify-around z-50`}>
            <Link href={'/'} className=''>
                <h1 className={`font-semibold font-poetsen text-2xl ${color ? "text-appBlack" : "text-appRed"}`}>IsANIME</h1>
            </Link>
            <div className='relative'>
                <input
                    ref={searchRef}
                    type="text"
                    className='rounded-md px-6 py-2 text-white bg-glass focus:outline-none'
                    placeholder='Search anime here..'
                />
                <button onClick={handleButtonClick} className='absolute py-2 px-3 text-white right-0 top-'>
                    <CiSearch className='text-2xl' />
                </button>
            </div>
        </div>
    )
}

export default Navbar
