import Image from 'next/image'
import userImage from '@/app/image/dp.jpeg'
import React from 'react'


const Hero = () => {
  return (
    <div className="bg-black min-h-screen bg-gradient-to-r lg:bg-[15%] bg-cover">
         
       
       <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-600">Welcome to My Website</h1>
          <p className="mt-4 text-lg text-yellow-900">A place to showcase your amazing work</p>
          <h1 className="text-4xl font-bold text-yellow-600 text-center">I am  YUSRA WAHEED</h1>
        </div>
      <Image src={userImage}
          alt={''} 
          width={500}
          height={600}
        
          />
          

      {/* Main Content Section */}
      <main className="container mx-auto mt-8 px-4 ">
        <div className=" p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-600">About Me</h2>
          <p className="mt-4 text-white ">
            Hi, I'm a web developer with experience in building high-quality websites. I specialize in creating dynamic
            and responsive web applications using modern web technologies. Feel free to browse through my portfolio and
            contact me for any projects.
          </p>
        </div>
      </main>
      
 </div>

  )
}

export default Hero