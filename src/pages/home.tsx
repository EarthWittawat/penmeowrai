import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { useEffect, useState } from 'react'
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-white min-h-screen'>

        <div className="mx-auto max-w-2xl">
            <div className="flex pt-8 flex-col lg:flex-row justify-center items-center">
            <img
          className="object-cover w-1/2 md:w-64 lg:w-full"
          src="/Logo.png"
          />
          <img
          className="object-cover w-1/2 md:w-64 lg:w-full"
          src="/cat.png"
          />
        </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
