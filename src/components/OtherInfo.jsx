import React from 'react'
import '../styles/OtherInfo.css'
import dr1 from '../assets/dr1.jpeg'
import dr2 from '../assets/dr2.jpeg'
import anime from '../assets/anime.jpg'
import tech from '../assets/tech.png'
function OtherInfo() {

    return (
    <div className='OtherInfo' id='OtherInfo'>
   <h1 className='text-center text-orange-400 font-bold text-5xl pb-14'>OTHER INFO</h1>
{/* <h2 className='text-center text-gray-100 font-semibold text-2xl '>Published 4 npm packages</h2>
        <div className="npm flex justify-around p-8 flex-wrap">
            <div className="npm1 p-5 border-solid border-2  border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
             <a href="/"><h2>shadowProvider</h2></a>   
            </div>
            <div className="npm2  p-5 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
                <a href="/"><h2 >LoginPager</h2></a>
            </div>
            <div className="npm3 p-5 border-solid border-2  border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
               <a href="/"><h2>signUpPager</h2></a> 
            </div>
            <div className="npm4  p-5 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
               <a href="/"><h2>shadowMe</h2></a> 

            </div>
        </div>
      */}



    <h1 className='text-center font-semibold text-3xl text-gray-200'>My Blogs</h1>
<div className="blogs flex justify-around p-10">
<div className="techBlog p-9 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
<a href="https://priyanshusharma.hashnode.dev/" target='_blank'> 
<img src={tech} alt="" style={{width:'90%'}}/>
<h2 className='text-center'>Tech Blogs</h2></a>

</div>
<div className="animeBlog p-9 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110">
<a href="https://www.blogger.com/u/1/blog/posts/7850295545890649594" target='_blank'><img src={anime} alt="" style={{width:'90%'}}/><h2 className='text-center'>Anime Blogs</h2></a>
</div>
</div>
    </div>
  )
}

export default OtherInfo