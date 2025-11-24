import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import AOSProvider from '../providers/AOSProvider'
import { DefaultSEO } from '../seo/SEO'
import { useLocation } from 'react-router-dom'
import DarkmodeToggle from './DarkmodeToggle'

export default function Layout({ children }) {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return <>
        <div className="bg-white">
            <DefaultSEO
                siteName="Youssef Shafek"
                defaultTitle="Youssef Shafek — Portfolio"
                description="Frontend developer building performant, accessible web apps with React and Tailwind."
                image="/profile.jpg"
            />
            <Navbar />
            <AOSProvider>
                <div className="">
                    <Outlet>
                        {children}
                    </Outlet>
                </div>
            </AOSProvider>
            <div className="fixed  lg:top-10 lg:right-14 bottom-5 right-5 z-50">
                {/* <DarkmodeToggle /> */}
            </div>
        </div>
    </>
}
