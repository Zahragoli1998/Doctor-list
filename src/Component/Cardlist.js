import React from "react";
import Card from "./Card";


const Cardlist =({doctorList})=>{
  return(
    <div>
        <div className="flex flex-wrap flex-row justify-center m-20 ">{
            doctorList.map((item,i) =>
              <Card
              key={i}
              item={item}
              i={i}/>
            )
          }
          </div>
    </div>
  )
}
export default Cardlist;