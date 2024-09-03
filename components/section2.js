"use client"
import React from 'react'
import Link from 'next/link'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const section2 = () => {
  const targetref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: targetref,
    offset: ["start end", "end start"]
})
const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1 ])
    const opacity =  useTransform(scrollYProgress, [0, 0.3], [0, 1])
    const transx = useTransform(scrollYProgress, [0,0.3], ["20%", "0%"])
    const itransx = useTransform(scrollYProgress, [0,0.3], ["-20%", "0%"])
    const scaleh = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1 ])
    const opa = useTransform(scrollYProgress, [0.2, 0.55], [0.3, 1 ])
    const position = useTransform(scrollYProgress, (pos)=>{
      console.log(pos)
  })
  return (
    <motion.section ref={targetref} style={{opacity}}  id="about" className='min-h-[100vh] w-full relative bottom-24 overflow-hidden pb-10'>
      <motion.div  className='flex gap-32 mx-auto w-[70%] pt-8' style={{scale}}>
        <motion.img style={{x:itransx}} src="https://i.pinimg.com/736x/05/19/a8/0519a8d7348ebf7dfd282ac4e9690ecb.jpg"  className='h-[350px] w-[300px] border-[10px] border-red-500 rounded-tr-[100px] rounded-bl-[100px] ' alt="" />
        <motion.h2 style={{x: transx}} className='text-5xl font-bold font-sans mt-28 text-center'>Enhance Your Modeling Skills With Us</motion.h2>
      </motion.div>
      <div className='w-full mt-10'><motion.h3 style={{scale:scaleh, opacity:opa}} className='text-center text-5xl font-bold'>Awards Won By Us</motion.h3></div>
      <motion.div style={{scale:scaleh,opacity:opa}} className='w-100% mt-10 px-5 flex gap-10'>

        <Link href="#" className="flex flex-col items-center bg-gradient-to-l from-[#ffa0df] via-[#f9d3ec] to-[#ffa0df] border-[1px] border-pink-800 shadow-lg shadow-pink-700 rounded-lg md:flex-row md:max-w-xl">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://png.pngtree.com/png-clipart/20240116/original/pngtree-star-pattern-trophy-awards-award-honors-inspiration-glory-png-image_14123888.png" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-pink-900 dark:text-white">Aesthetic Shoots Award 2021</h4>
            <p className="mb-3 font-normal text-pink-800 dark:text-gray-400">Here are the biggest studio of aesthetics photoshoots of 2021 so far, in reverse chronological order.</p>
          </div>
        </Link>
        <Link href="#" className="flex flex-col items-center bg-gradient-to-l from-[#ffa0df] via-[#f9d3ec] to-[#ffa0df] border-[1px] border-pink-800 shadow-lg shadow-pink-700 rounded-lg md:flex-row md:max-w-xl">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://png.pngtree.com/png-clipart/20240116/original/pngtree-star-pattern-trophy-awards-award-honors-inspiration-glory-png-image_14123888.png" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-pink-900 dark:text-white">Aesthetic Shoots Award 2021</h4>
            <p className="mb-3 font-normal text-pink-800 dark:text-gray-400">Here are the biggest studio of aesthetics photoshoots of 2021 so far, in reverse chronological order.</p>
          </div>
        </Link>
        <Link href="#" className="flex flex-col items-center bg-gradient-to-l from-[#ffa0df] via-[#f9d3ec] to-[#ffa0df] border-[1px] border-pink-800 shadow-lg shadow-pink-700 rounded-lg md:flex-row md:max-w-xl">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://png.pngtree.com/png-clipart/20240116/original/pngtree-star-pattern-trophy-awards-award-honors-inspiration-glory-png-image_14123888.png" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-pink-900 dark:text-white">Aesthetic Shoots Award 2021</h4>
            <p className="mb-3 font-normal text-pink-800 dark:text-gray-400">Here are the biggest studio of aesthetics photoshoots of 2021 so far, in reverse chronological order.</p>
          </div>
        </Link>

      </motion.div>
    </motion.section>
  )
}

export default section2
