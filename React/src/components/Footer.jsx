import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer  className="bg-violet-600 text-white mt-50 p-8  ">
    <div className='container px-6  grid grid-cols-1 md:grid-cols-4 gap-16 '>
        <div >
            <h1 className='text-2xl font-bold mb-3 '>
              <i class="fa-solid fa-truck-fast me-1"></i>  
                E Cart
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam enim facilis nesciunt atque laboriosam dolores omnis molestiae! Incidunt quo pariatur necessitatibus fuga illum quaerat nihil, obcaecati mollitia voluptates non.
            </p>  
            
        </div>
 
           <div className='flex flex-col'>
          <h5 className="text-xl font-semibold mb-3">Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                    <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>

    </div>


    <div className='flex flex-col'>
          <h5 className="text-xl font-bold">Guides</h5>
         <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}}>React</a>
                  <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
         <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}>React Router</a>

        </div>




        <div>
                      <h5 className="text-xl font-semibold mb-3">Contact Us</h5>
                      <div className='relative w-full'>
                      <input type="email"            placeholder='Enter your email..'      className="w-full p-2 rounded text-white mb-3" 
                                       />
   
   <i className="fa-solid fa-arrow-right absolute right-1 top-1/5  text-white"></i>

                             
                                       </div>
                       <div className="flex space-x-3">
            <a href="/" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          </div>
        </div>
    </div>

    <div className='border-t border-gray-600 mt-6 pt-4 text-center text-sm'>
  © May 2024 Batch. Media Player. Built with React.
 </div>
   </footer>
  )
}

export default Footer