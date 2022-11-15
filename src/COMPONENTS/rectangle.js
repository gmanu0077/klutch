import React, { useEffect, useState } from "react";

export default function Rect(){
      const [rectdata, setrectdata] = useState([])
      useEffect(() => { 
       setrectdata(JSON.parse(localStorage.getItem('selected')))
       console.log(localStorage.getItem("selected"),"rect")

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