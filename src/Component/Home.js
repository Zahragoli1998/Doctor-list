import React from 'react';
import { Link } from 'react-router-dom';


const Home =()=>{


    return(
        <div className= " bg-[url('./Component/5.webp')]  bg-no-repeat bg-cover h-screen ">
            <div className='bg-sky-700 border-sky-800 border-4 w-fit p-5 mx-10 rounded-3xl text-slate-100 text-2xl'>
                <Link to={'doctorlist'}>Doctorlist</Link>
            </div>
        </div>
    )
}
export default Home;