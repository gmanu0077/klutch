import React, { useEffect, useState,useContext } from "react";
import { AuthContext } from "./card";
export default function Rect(){
  var {selec} = useContext(AuthContext);

      const [rectdata, setrectdata] = useState([])
      useEffect(() => { 
       setrectdata(selec)
       console.log(selec,"rect")

      }, []);
    return(
        <div>
          {rectdata?.map(ir=>{
            console.log(ir,"itit")
            return(
<div className="rectangle">
    {ir}
</div>
            )
          })}
        </div>
    )
}