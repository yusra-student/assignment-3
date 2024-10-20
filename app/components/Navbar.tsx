import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="hidden lg:block ">
    <div className=" bg-gray-900">
        <div 
        className="flex w-fit gap-10 mx-auto font-medium py-4 text-yellow ">
        
          <Link className="navbar__link relative text-yellow-600 " href="/">Home</Link> {/* No need for <a> */}
    
          <Link className="navbar__link relative text-yellow-600" href="/app/about">About</Link> {/* No need for <a> */}
    
          <Link className="navbar__link relative text-yellow-600" href="/app/services/page.tsx">Services</Link> {/* No need for <a> */}
    
          


    
        </div>
     </div> 
</div>
  )
}

export default Navbar