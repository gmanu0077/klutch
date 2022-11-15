import "./cred.css";
import Card from "./card";
import Rect from "./rectangle";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "./card";
export default function Credit() {

  const[selected,setSelected]=useState([])
  useEffect(() => { 
    console.log(selected,"ijijij")
  }, []);
  return (
    <div>
      <div className="upper-box">
        <h3>Create team</h3>
      </div>
      <div className="lower-box">
        <div className="box">
          <div className="inner-box">
            <AuthContextProvider>
            <Rect /></AuthContextProvider>
          </div>
          <div className="crbox">CREDIT LEFT :{}</div>
        </div>
        <div className="tVT">
          <div className="team1">
            <div className="rect-3"></div>
            <div className="TL"></div>
            <div className="txt">
              <p>team liquid</p>
            </div>
          </div>
          <p className="vs">VS</p>
          <div className="team2"></div>
          <div className="rect-4"></div>
          <div className="ST"></div>
          <div className="txt2">
            <p>Sentinals</p>
          </div>
        </div>
      </div>
      <Card setselect={setSelected}/>
    </div>
  );
}
