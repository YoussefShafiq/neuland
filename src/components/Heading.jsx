import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading({ title, link }) {
    return <>
        <div className="flex flex-wrap   justify-between items-center border-b mb-5 pb-3">
            <h2 className='capitalize text-primary text-2xl lg:text-3xl font-bold'>{title}</h2>
            {link && <Link to={'/'} className='text-secondary text-sm flex gap-1 items-end hover:text-primary transition-colors'>
                {link}
                <ArrowRight size={16} />
            </Link>}
        </div>
    </>
}
