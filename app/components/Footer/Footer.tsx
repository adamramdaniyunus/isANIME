import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='min-h-[200px] bg-appRed'>
                <div className='container pb-20 pt-5 grid md:grid-cols-3'>
                    <div className='py-8 px-4'>
                        <a href="#" className='font-semibold font-poetsen text-black tracking-widest text-2xl sm:text-3xl'>IsANIME</a>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia accusamus similique vitae nam quis dolorum eius ut enim id obcaecati!</p>
                        {/* <a href="#" className='inline-block bg-primary py-2 px-4 text-sm mt-5 rounded-full'>
                            Visit our Youtube
                        </a> */}
                    </div>


                    {/* First Links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Footer Links</h1>
                            <ul className='space-y-3'>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/anime-top/1'>Anime Top</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/anime-list/1'>Anime Lists</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/movies-list/1'>Movie Lists</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/upcoming-list/1'>Upcoming Lists</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Second Links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/anime-top/1'>Anime Top</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/anime-list/1'>Anime Lists</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/movies-list/1'>Movie Lists</Link>
                                </li>
                                <li>
                                    <Link className='inline-block hover:scale-105 hover:text-black duration-200' href='/upcoming-list/1'>Upcoming Lists</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Developer */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>
                                Contact Developer
                            </h1>
                            <div>
                                <p className='mb-3'>Bogor, Indonesia</p>
                                <p>089526496026</p>
                                {/* Social Links */}
                                <div className='flex gap-2 mt-4'>
                                    <a href="#">
                                        <FaFacebook className='inline-block hover:scale-105 duration-200 text-xl' />
                                    </a>
                                    <a href="https://www.instagram.com/adamrmdaniyunus/">
                                        <FaInstagram className='inline-block hover:scale-105 duration-200 text-xl' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/adam-ramdani-yunus-813aa328b/">
                                        <FaLinkedin className='inline-block hover:scale-105 duration-200 text-xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
