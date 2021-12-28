import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Mymap from './Mymap';
import { Rating } from 'react-simple-star-rating';

const Singledoctor =()=>{

  const[thisDoctor,setThisDoctor]=useState([]);
  const [loaded ,setLoaded] = useState(false)
  const[address,setAddress]=useState({});
  const {id} = useParams();
  const [rating, setRating] = useState(0)
  
  useEffect(()=>{
    fetch(`https://www.tebinja.com/api/v1/doctors/${id}`)
    .then(res=>res.json())
    .then(data=> {
      console.log(data.doctor);
      setThisDoctor(data.doctor);
      setAddress(data.doctor.clinics[0])
      setLoaded(true)
      setRating(data.doctor.rate)
    })
  },[])

  const handleRating = (rate) => {
     setRating(rate)
     
  }
  
  if (!loaded) return null

  return(
    <div className='h-screen'>
        <div className=''>
          <Link to={'/doctorlist'}>
          <img className='w-25 h-25' src={'https://img.icons8.com/external-others-phat-plus/2x/external-back-essential-blue-others-phat-plus.png'}></img></Link>
        </div>
          <div className='bg-sky-100 rounded-3xl flex flex-col mx-80 my-20'>
              <div className='flex-col'>
                <img className='w-80 h-80 m-5' src={'https://www.tebinja.com/img/uploads/doctors/thumbnails/'+ thisDoctor.url }/>
                <div className='m-5 text-xl text-left'>
                  <h1 className='text-3xl'>{thisDoctor.fname} {thisDoctor.lname}</h1>
                  {/* <Rating onClick={handleRating} ratingValue={(thisDoctor.rate)*20} readonly={true}/> */}
                    <div className='bg-green-600 rounded-xl w-16 h-8 text-center'>
                      <h5>{thisDoctor.rate}</h5>
                    </div>
                    <h6> کد نظام پزشکی: {thisDoctor.pezeshkCode}</h6>
                    <h5>فارغ التحصیل شده از {thisDoctor.university.name}</h5>
                </div>
            </div>
              <hr/>
              <div className='flex flex-col items-end text-xl m-5'>
                <h2 className='my-5 text-3xl'>  :کلینیک </h2>
                <h5>{address.about}</h5>
                <h5>آدرس: {address.address}</h5>
                <h3>شماره تماس :{address.telePhones[0].phone}</h3>
            </div>
              <Mymap 
                lat={address.latitude}
                lng={address.longtitude}
              />
          </div>
    </div>
  
  )
}

export default Singledoctor;
