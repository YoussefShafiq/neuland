import React, { useEffect, useState } from 'react'
import { PiLineVertical } from 'react-icons/pi'

export default function Projects() {
    useEffect(() => {
        setTimeout(() => {
            document.documentElement.classList.add('dark');
        }, 0);
        return () => {
            document.documentElement.classList.remove('dark');
        }
    }, [])

    // Dynamic filter configuration
    const filterConfig = [
        {
            id: 'location',
            label: 'Location',
            options: ['All Locations', 'Mivida, New Cairo', 'Sheikh Zayed', 'New Capital', '6th October', 'North Coast'],
            default: 'All Locations'
        },
        {
            id: 'priceRange',
            label: 'Price Range',
            options: ['All Prices', 'Under $200k', '$200k - $400k', '$400k - $600k', '$600k - $1M', 'Over $1M'],
            default: 'All Prices'
        },
        {
            id: 'developer',
            label: 'Developer',
            options: ['All Developers', 'Emaar', 'Sodic', 'Palm Hills', 'Mountain View', 'Ora Developers'],
            default: 'All Developers'
        },
        {
            id: 'type',
            label: 'Type',
            options: ['All Types', 'villa', 'apartment', 'townhouse', 'penthouse', 'duplex'],
            default: 'All Types'
        },
        {
            id: 'project',
            label: 'Project',
            options: ['All Projects', 'Mivida', 'Allegria', 'Swan Lake', 'iCity', 'Zed East'],
            default: 'All Projects'
        },
        {
            id: 'beds',
            label: 'No. of Beds',
            options: ['All Beds', '1 Bed', '2 Beds', '3 Beds', '4 Beds', '5+ Beds'],
            default: 'All Beds'
        },
        {
            id: 'finishType',
            label: 'Finish Type',
            options: ['All Finishes', 'Finished', 'Semi-Finished', 'Core & Shell', 'Fully Furnished'],
            default: 'All Finishes'
        }
    ]

    // Initialize filter states from config
    const initialFilters = filterConfig.reduce((acc, filter) => {
        acc[filter.id] = filter.default
        return acc
    }, {})

    const [filters, setFilters] = useState(initialFilters)

    const data = [
        {
            'img': 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title': 'Modern Apartment in City Center',
            'category': 'villa',
            'price': 350000,
            'priceDisplay': '$350,000',
            'location': 'Mivida, New Cairo',
            'developer': 'Emaar',
            'project': 'Mivida',
            'beds': '3 Beds',
            'finishType': 'Finished',
            'features': ['3 Beds', '2 Baths', '1,500 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop',
            'title': 'Luxury Villa with Pool',
            'category': 'villa',
            'price': 850000,
            'priceDisplay': '$850,000',
            'location': 'Sheikh Zayed',
            'developer': 'Sodic',
            'project': 'Allegria',
            'beds': '5 Beds',
            'finishType': 'Fully Furnished',
            'features': ['5 Beds', '4 Baths', '3,500 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
            'title': 'Cozy Townhouse',
            'category': 'townhouse',
            'price': 280000,
            'priceDisplay': '$280,000',
            'location': '6th October',
            'developer': 'Palm Hills',
            'project': 'Swan Lake',
            'beds': '2 Beds',
            'finishType': 'Semi-Finished',
            'features': ['2 Beds', '2 Baths', '1,200 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1153&auto=format&fit=crop',
            'title': 'Stunning Penthouse',
            'category': 'penthouse',
            'price': 1200000,
            'priceDisplay': '$1,200,000',
            'location': 'New Capital',
            'developer': 'Mountain View',
            'project': 'iCity',
            'beds': '4 Beds',
            'finishType': 'Fully Furnished',
            'features': ['4 Beds', '3 Baths', '2,800 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1170&auto=format&fit=crop',
            'title': 'Beachfront Villa',
            'category': 'villa',
            'price': 950000,
            'priceDisplay': '$950,000',
            'location': 'North Coast',
            'developer': 'Ora Developers',
            'project': 'Zed East',
            'beds': '4 Beds',
            'finishType': 'Finished',
            'features': ['4 Beds', '3 Baths', '3,000 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1184&auto=format&fit=crop',
            'title': 'Modern Duplex',
            'category': 'duplex',
            'price': 420000,
            'priceDisplay': '$420,000',
            'location': 'Mivida, New Cairo',
            'developer': 'Emaar',
            'project': 'Mivida',
            'beds': '3 Beds',
            'finishType': 'Semi-Finished',
            'features': ['3 Beds', '3 Baths', '2,000 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1287&auto=format&fit=crop',
            'title': 'Compact Apartment',
            'category': 'apartment',
            'price': 180000,
            'priceDisplay': '$180,000',
            'location': 'Sheikh Zayed',
            'developer': 'Sodic',
            'project': 'Allegria',
            'beds': '1 Bed',
            'finishType': 'Core & Shell',
            'features': ['1 Bed', '1 Bath', '800 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1170&auto=format&fit=crop',
            'title': 'Elegant Townhouse',
            'category': 'townhouse',
            'price': 520000,
            'priceDisplay': '$520,000',
            'location': '6th October',
            'developer': 'Palm Hills',
            'project': 'Swan Lake',
            'beds': '4 Beds',
            'finishType': 'Finished',
            'features': ['4 Beds', '3 Baths', '2,500 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1170&auto=format&fit=crop',
            'title': 'Family Villa',
            'category': 'villa',
            'price': 650000,
            'priceDisplay': '$650,000',
            'location': 'New Capital',
            'developer': 'Mountain View',
            'project': 'iCity',
            'beds': '5 Beds',
            'finishType': 'Semi-Finished',
            'features': ['5 Beds', '4 Baths', '3,200 sqft']
        },
        {
            'img': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1170&auto=format&fit=crop',
            'title': 'Studio Apartment',
            'category': 'apartment',
            'price': 150000,
            'priceDisplay': '$150,000',
            'location': 'Mivida, New Cairo',
            'developer': 'Emaar',
            'project': 'Mivida',
            'beds': '1 Bed',
            'finishType': 'Fully Furnished',
            'features': ['1 Bed', '1 Bath', '650 sqft']
        },
    ]

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }))
    }

    const resetFilters = () => {
        setFilters(initialFilters)
    }

    const filteredData = data.filter(property => {
        // Location filter
        if (filters.location !== 'All Locations' && property.location !== filters.location) {
            return false
        }

        // Price range filter
        if (filters.priceRange !== 'All Prices') {
            const price = property.price
            if (filters.priceRange === 'Under $200k' && price >= 200000) return false
            if (filters.priceRange === '$200k - $400k' && (price < 200000 || price >= 400000)) return false
            if (filters.priceRange === '$400k - $600k' && (price < 400000 || price >= 600000)) return false
            if (filters.priceRange === '$600k - $1M' && (price < 600000 || price >= 1000000)) return false
            if (filters.priceRange === 'Over $1M' && price < 1000000) return false
        }

        // Developer filter
        if (filters.developer !== 'All Developers' && property.developer !== filters.developer) {
            return false
        }

        // Type filter
        if (filters.type !== 'All Types' && property.category !== filters.type) {
            return false
        }

        // Project filter
        if (filters.project !== 'All Projects' && property.project !== filters.project) {
            return false
        }

        // Beds filter
        if (filters.beds !== 'All Beds' && property.beds !== filters.beds) {
            return false
        }

        // Finish type filter
        if (filters.finishType !== 'All Finishes' && property.finishType !== filters.finishType) {
            return false
        }

        return true
    })

    return <>
        {/* Hero Section with Filtration */}
        <div className="navspacer relative min-h-[600px] flex flex-col items-center justify-center pb-10 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20"
            ></div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        Explore Our <span className="text-transparent bg-clip-text bg-secondary">Projects</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover your dream property from our curated collection of luxury real estate
                    </p>
                </div>

                {/* Filter Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* Dynamic Filters */}
                        {filterConfig.map((filter) => (
                            <div key={filter.id} className="group">
                                <label className="block text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                    {filter.label}
                                </label>
                                <select
                                    value={filters[filter.id]}
                                    onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                                    className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white text-gray-800 font-medium shadow-sm cursor-pointer"
                                >
                                    {filter.options.map((option, i) => (
                                        <option key={i} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        {/* Reset Button */}
                        <div className="flex items-end w-full">
                            <button
                                onClick={resetFilters}
                                className="w-full md:w-auto px-8 py-3 bg-secondary hover:bg-primary text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Count with Icon */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2 text-white">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-sm font-medium">
                                Showing <span className="text-blue-400 font-bold">{filteredData.length}</span> of <span className="font-bold">{data.length}</span> properties
                            </span>
                        </div>
                        {filteredData.length < data.length && (
                            <span className="text-xs text-blue-300 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                                {data.length - filteredData.length} filtered out
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <section className="space-y-6 container mx-auto px-4 py-8">
            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.map((property, index) => (
                    <div key={index} className="h-96 group overflow-hidden rounded-3xl relative cursor-pointer">
                        <img src={property.img} alt={property.title} className='w-full h-full object-cover group-hover:scale-110 duration-500' />
                        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent to-50% text-white p-4 rounded-2xl">
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs">{property.category}</p>
                                <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs"> <span className='font-semibold '>from</span> {property.priceDisplay}</p>
                                <p className="bg-primary/50 backdrop-blur-sm px-3 py-2 rounded-full capitalize text-xs"> {property.location}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className='text-2xl font-semibold' >{property.title}</h3>
                                <div className="flex">
                                    {property.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="text-sm flex items-center">{feature} {featureIndex !== property.features.length - 1 ? <PiLineVertical /> : ''}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results Message */}
            {filteredData.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No properties found matching your filters.</p>
                    <button
                        onClick={resetFilters}
                        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </section>
    </>
}