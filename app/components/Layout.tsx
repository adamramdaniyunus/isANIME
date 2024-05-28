'use client'
import React from 'react'
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import { useRouter } from 'next/navigation'

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
