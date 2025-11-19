import React from 'react'

export default function ShadowImage({ src, alt, className='' }) {
    return <>
        <div className={`relative group ${className}`}>
            <div className={`absolute inset-0 rounded-3xl overflow-hidden h-full duration-500 group-hover:scale-[1.02] group-hover:blur-[8px] `}>
                <img src={src} alt={alt} className='h-full w-full object-cover' />
            </div>
            <div className="rounded-3xl overflow-hidden h-full group">
                <img src={src} alt={alt} className='h-full w-full object-cover group-hover:scale-105 duration-500' />
            </div>
        </div>
    </>
}
