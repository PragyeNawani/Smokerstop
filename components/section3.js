"use client"
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const section3 = () => {
    const crouselref = useRef(null)
    useEffect(() => {
        let next = document.getElementById('next')
        let prev = document.getElementById("prev")
        let active = 1
        let other_1 = null
        let other_2 = null
        let carousel = document.querySelector('.carousel')
        let items = document.querySelectorAll('.carousel .item')
        let countitems = items.length
        next.onclick = () => {
            carousel.classList.remove("prev")
            carousel.classList.add("next")
            active = active + 1 >= countitems ? 0 : active + 1;
            other_1 = active - 1 < 0 ? countitems - 1 : active - 1;
            other_2 = active + 1 >= countitems ? 0 : active + 1;
            changecoffee();
        }
        prev.onclick = () => {
            carousel.classList.remove('next');
            carousel.classList.add('prev');
            active = active - 1 < 0 ? countitems - 1 : active - 1;
            other_1 = active - 1 < 0 ? countitems - 1 : active - 1;
            other_2 = active + 1 >= countitems ? 0 : active + 1;
            changecoffee();
        }
        const changecoffee = () => {
            let itemOldActive = document.querySelector('.carousel .item.active');
            if (itemOldActive) itemOldActive.classList.remove('active');

            let itemOldOther_1 = document.querySelector('.carousel .item.other1');
            if (itemOldOther_1) itemOldOther_1.classList.remove('other1');

            let itemOldOther_2 = document.querySelector('.carousel .item.other2');
            if (itemOldOther_2) itemOldOther_2.classList.remove('other2');

            items[active].classList.add('active');
            items[other_1].classList.add('other1');
            items[other_2].classList.add('other2');
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                next.click();
            }, 5000);
        }
        let autoPlay = setInterval(() => {
            next.click();
        }, 5000);
    }, [])

    return (
        <section id="gallery" className='bg-white min-h-[100vh] w-full pb-10'>
            <div className='w-[90%] mx-auto'>

            <div className='w-full'><h2 className='text-center text-5xl py-4 font-bold'>Gallery Showcase</h2></div>

            <div id="default-carousel" className="relative w-full h-[80vh] carousel next" data-carousel="slide">
                <div ref={crouselref} className="relative flex overflow-hidden rounded-lg h-[100%] ">
                    <div className="absolute item other1" data-carousel-item>
                        <img src="https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?cs=srgb&dl=pexels-asadphoto-169211.jpg&fm=jpg" className=" block w-full" alt="..." />
                    </div>
                    <div className="absolute item active" data-carousel-item>
                        <img src="https://images.alphacoders.com/718/718709.jpg" className=" block w-full" alt="..." />
                    </div>
                    <div className="absolute item other2" data-carousel-item>
                        <img src="https://images.pexels.com/photos/1148952/pexels-photo-1148952.jpeg?cs=srgb&dl=pexels-kowalievska-1148952.jpg&fm=jpg" className=" block w-full" alt="..." />
                    </div>
                    <div className="absolute item" data-carousel-item>
                        <img src="https://i.pinimg.com/originals/9c/bd/67/9cbd67b19efb3f6b10a9c8a00e256f0d.jpg" className=" block w-full " alt="..." />
                    </div>
                    <div className="absolute item" data-carousel-item>
                        <img src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" className="block w-full" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse bg-black">
                    <button type="button" className="w-3 h-10 bg-black rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 bg-black rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 bg-black rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 bg-black rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 bg-black rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button id="prev" type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button id="next" type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            </div>
        </section>
    )
}

export default section3
