import React, { useEffect, useState } from 'react'
import heroimage from '../assets/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg'
import Heading from '../components/Heading';
import { Quote } from 'lucide-react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import { PiLineVertical } from 'react-icons/pi';
import ShadowImage from '../components/ShadowImage';

export function HeroSection() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <>
        <div className="min-h-[calc(100vh-80px) p-8 flex flex-col-reverse lg:flex-row gap-5 lg:gap-0">
            <div className="flex flex-col lg:w-1/3">
                {/* left top */}
                <div className="bg-white w-full h-2/5 rounded-l-[50px] rounded-t-[50px]">
                    <div className="bg-lightprimary h-full w-full rounded-[50px] lg:rounded-tr-none rounded-tr-[50px] relative p-8 pb-24 flex flex-col gap-4">
                        <h1 className='text-5xl font-bold text-primary'>NeuLand</h1>
                        <p>We turn real estate opportunities into lasting investments through expertise, transparency, and market insight.</p>
                        <div className="absolute -bottom-[0.5px] left-[55px] -right-[5.5px] h-24 bg-white rounded-t-3xl" style={{
                            clipPath: isLargeScreen
                                ? `polygon(0% 100%, 100% 100%, 100% 76.7%, 100% 69.45%, 99.95% 64.56%, 99.9% 59.67%, 99.77% 54.78%, 99.64% 48.89%, 99.46% 43.02%, 99.19% 38.23%, 98.86% 34.03%, 98.54% 30.64%, 98.19% 28%, 97.8% 25.84%, 97.42% 23.68%, 97% 22%, 96% 19%, 95.04% 17.1%, 94% 16%, 92.65% 15.29%, 91.29% 15.29%, 90% 16%, 88.43% 17.1%)`
                                : `polygon(0.03% 100.1%, 100.03% 100.1%, 100.03% 0%, 98.24% 10.31%, 96.12% 17.2%, 93.79% 22.13%, 91.09% 25.89%, 83.71% 32.47%, 81.99% 33.9%, 80.1% 35.44%, 77.75% 37.37%)`
                        }}>
                        </div>
                    </div>
                </div>
                {/* left bottom */}
                <div className="bg-white p-8 lg:pe-7 pe-0 ps-0 pb-0 w-full h-3/5">
                    <div className="bg-lightprimary h-full w-full rounded-[50px] rounded-tr-none relative flex flex-col gap-2 items-start p-8">
                        <h1 className='text-2xl font-bold text-primary'>Over 50M+ in Property Sales</h1>
                        <p>Building connections between people and places.
                            We aim to make property buying and selling simpler, smarter, and more rewarding — one home at a time.</p>
                        <button className='bg-primary text-white px-4 py-2 rounded-3xl'>Discover more</button>
                        <div className="absolute top-[0.5px] left-[42px] -right-[0.5px] h-24 bg-lightprimary rounded-t-3xl -translate-y-full" style={{
                            'clip-path': `
polygon(0% 100%, 100% 100%, 100% 76.7%, 100% 69.45%, 99.95% 64.56%, 99.9% 59.67%, 99.77% 54.78%, 99.64% 48.89%, 99.46% 43.02%, 99.19% 38.23%, 98.86% 34.03%, 98.54% 30.64%, 98.19% 28%, 97.8% 25.84%, 97.42% 23.68%, 97% 22%, 96% 19%, 95.04% 17.1%, 94% 16%, 92.65% 15.29%, 91.29% 15.29%, 90% 16%, 88.43% 17.1%)` }}>
                        </div>
                    </div>
                </div>
            </div>
            {/* right section */}
            <div className="bg-lightprimary lg:w-2/3 rounded-[50px] lg:rounded-tl-none relative p-5 space-y-5">
                <div className="h-full rounded-[30px] overflow-hidden">
                    <img src={heroimage} className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    </>
}

export function AboutUs() {
    return <>
        <Heading />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
                <h1 className='text-primary text-3xl lg:text-5xl font-semibold'>Your Trusted Partner in Real Estate</h1>
                <ShadowImage className={'h-full'} src={'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <div className="rounded-2xl overflow-hidden hover:-translate-y-2 duration-500">
                        <img src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb3BlcnR5fGVufDB8fDB8fHww" alt="about neuland" className='h-full w-full object-cover filter saturate-0 hover:saturate-100 duration-500' />
                    </div>
                    <div className="rounded-2xl overflow-hidden hover:-translate-y-2 duration-500">
                        <img src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about neuland" className='h-full w-full object-cover filter saturate-0 hover:saturate-100 duration-500' />
                    </div>
                </div>
                <h3 className='text-xl font-semibold text-secondary' >About Us</h3>
                <p className='text-justify'>At NeuLand, we are dedicated to transforming real estate opportunities into lasting investments. Our team of experts leverages deep market insight and a commitment to transparency to guide our clients through every step of the property journey.</p>
                <div className="border-l-4 border-primary ps-3 relative pe-10 mt-5">
                    <div className="absolute top-0 right-0 opacity-10">
                        <Quote size={40} />
                    </div>
                    <h2 className='text-3xl lg:text-3xl font-semibold text-primary'>Exclusive listings, competitive prices, and expert guidance__all in one place. </h2>
                </div>
            </div>
        </div>
    </>
}

export function BestProjects() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const data = [
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': '$350,000',
            'location': 'Mivida, New Cairo',
            'features': [
                '3 Beds', '2 Baths', '1,500 sqft'
            ]
        },
    ]

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const dataChunks = chunkArray(data, 3);

    return (
        <section>
            <Heading title="explore our best projects" link="View all projects" />
            <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center gap-2">
                    {/* Previous Arrow */}
                    <button
                        onClick={goToPrev}
                        className="p-2 rounded-full bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-secondary border-2 border-secondary hover:text-secondary hover:bg-transparent text-white transition-colors"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {dataChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="w-full">
                            <div className="flex flex-col lg:flex-row gap-5">
                                {chunk.map((property, index) => (
                                    <div key={index} className="w-full lg:w-1/3 group lg:hover:w-3/5 transition-all duration-500 relative">
                                        <div className="h-96 overflow-hidden rounded-3xl mb-4 relative cursor-pointer">
                                            <img src={property.img} alt={property.title} className='w-full h-full object-cover group-hover:scale-110 duration-500' />
                                            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent to-50% text-white p-4 rounded-2xl">
                                                <dix className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs">{property.category}</p>
                                                    <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs"> <span className='font-semibold '>from</span> {property.price}</p>
                                                    <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs"> {property.location}</p>
                                                </dix>
                                                <div className="flex flex-col gap-4">
                                                    <h3 className='text-2xl font-semibold' >{property.title}</h3>
                                                    <div className="flex">
                                                        {property.features.map((feature, featureIndex) => (
                                                            <div key={featureIndex} className="text-sm flex items-center">{feature} {featureIndex != property.features.length - 1 ? <PiLineVertical /> : ''}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export function ClientsFeedbacks() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const data = [
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },
        {
            'img': 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'name': 'john doe',
            'job': 'business owner',
            'feedback': 'the team helped me to find the perfect home within my budget. smooth and professional experience!',
        },

    ]

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const dataChunks = chunkArray(data, 3);

    return (
        <section>
            <Heading title="what our happy clients say" />
            <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center gap-2">
                    {/* Previous Arrow */}
                    <button
                        onClick={goToPrev}
                        className="p-2 rounded-full bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-secondary border-2 border-secondary hover:text-secondary hover:bg-transparent text-white transition-colors"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {dataChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="w-full">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                                {chunk.map((property, index) => (
                                    <div
                                        key={index}
                                        className={`
                            w-full lg:w-1/3 lg:hover:w-2/3 duration-500 lg:h-[400px] group relative flex 
                            ${index === 0 ? 'lg:items-start' : index === 1 ? 'lg:items-center' : 'lg:items-end'}
                        `}
                                    >
                                        {/* Main card container */}
                                        <div className="
                            lg:h-1/2 lg:group-hover:h-full 
                            flex-1
                            group-hover:flex-2
                            duration-500 ease-in-out 
                            overflow-hidden 
                            rounded-3xl 
                            relative 
                            cursor-pointer 
                            flex flex-col lg:flex-row
                            border-2 border-gray-200
                            bg-primary p-2
                        ">
                                            {/* Image section - full width by default, half on hover */}
                                            <div className="
                                w-full lg:group-hover:w-1/2
                                h-full
                                duration-500
                                overflow-hidden
                                relative
                                rounded-2xl
                            ">
                                                <img
                                                    src={property.img}
                                                    alt={property.name}
                                                    className='w-full h-full object-cover duration-500 group-hover:scale-105'
                                                />
                                                {/* Title overlay - visible in non-hovered state */}
                                                <div className="
                                hidden lg:block absolute bottom-0 left-0 right-0
                                p-4
                                text-white
                                bg-gradient-to-t from-black/80 via-black/40 to-transparent
                                group-hover:opacity-0
                                duration-300
                            ">
                                                    <h3 className="text-lg font-semibold capitalize">{property.name}</h3>
                                                    {property.job && (
                                                        <p className="text-sm opacity-90">{property.job}</p>
                                                    )}
                                                </div>                                            </div>

                                            {/* Content section - hidden by default, visible on hover */}
                                            <div className="
                                lg:absolute inset-0 
                                flex
                                lg:opacity-0 lg:group-hover:opacity-100
                                group-hover:duration-500
                                pointer-events-none
                                group-hover:delay-500
                            ">
                                                {/* Spacer for image half */}
                                                <div className="hidden lg:block lg:w-1/2"></div>

                                                {/* Content half */}
                                                <div className="
                                    lg:w-1/2 h-full
                                    flex flex-col justify-center
                                    p-6
                                    pointer-events-auto
                                ">
                                                    <h3 className="text-xl font-bold text-white mb-3 transform lg:translate-x-4 lg:group-hover:translate-x-0 duration-300 capitalize">
                                                        {property.name}
                                                    </h3>

                                                    {property.feedback && (
                                                        <p className="text-white text-xl italic mb-4 transform lg:translate-x-4 lg:group-hover:translate-x-0 duration-300 delay-100">
                                                            "{property.feedback}"
                                                        </p>
                                                    )}

                                                    {property.job && (
                                                        <div className="mb-3 transform lg:translate-x-4 lg:group-hover:translate-x-0 duration-300 delay-150">
                                                            <p className="text- text-white/50">{property.job}</p>
                                                        </div>
                                                    )}

                                                    {property.location && (
                                                        <div className="flex items-center text-gray-500 transform translate-x-4 group-hover:translate-x-0 duration-300 delay-200">
                                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-sm">{property.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default function Home() {
    return <>
        <Helmet
            title='NeuLand'

        />
        <HeroSection />
        <AboutUs />
        <BestProjects />
        <ClientsFeedbacks />
    </>
}
