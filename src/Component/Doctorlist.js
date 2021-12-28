import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cardlist from './Cardlist';

const Doctorlist=()=>{
    const[doctorList,setdoctorList]=useState([]);
  
    useEffect(()=>{
      fetch('https://www.tebinja.com/api/v1/doctors/searchi?page=0')
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
         const doctorArr = data.doctors.hits;
         setdoctorList(doctorArr);
        })
      },[])
  
    return(
      <div className='bg-sky-200  max-h-fit overflow-hidden' >
      <div className='link'>
      <Link to={'/'}> <img className='w-25 h-25' src={'https://img.icons8.com/external-others-phat-plus/2x/external-back-essential-blue-others-phat-plus.png'}></img></Link>
      </div>
      <div>
          <Cardlist
            doctorList={doctorList}
          />
      </div>
      </div>
     
    )
}
export default Doctorlist;