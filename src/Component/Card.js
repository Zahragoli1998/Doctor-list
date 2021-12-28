import React from "react";
import { Link } from "react-router-dom";

const Card =({item,i})=>{
  return(

   <div className="m-10 bg-gray-300  w-1/5 py-8 flex flex-wrap flex-row justify-center rounded-3xl border-8 border-gray-400 border-double shadow-2xl shadow-gray-500">
      <Link to={`/singledoctor/${item._id}`}>
         <img className=" w-64 rounded-full shadow-xl shadow-black"  src={'https://www.tebinja.com/img/uploads/doctors/thumbnails/'+ item._source.url }/>
      </Link>
   <div className="text-center mt-8 font-bold  text-xl font-sans ">
   <h1 className="text-3xl m-10">{item._source.fname} {item._source.lname}</h1>
   <p>{'  کد نظام پزشکی : '+item._source.pezeshkCode}</p>
   <p>{item._source.spUnis[0].specialty.name}</p>
      </div>
   </div>
      )
}
export default Card;