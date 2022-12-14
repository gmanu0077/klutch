import { useEffect, useState } from "react";

import Card from "./card";
import Selected from "./selected";
import "./cred.css";

export default function Credit() {
  const [selected, setSelected] = useState([]);
  const creditsUsed = selected
    .map((player) => player.credit)
    .reduce((a, b) => a + b, 0);
  const creditsLeft = 15 - creditsUsed;
  return (
    <div>
      <div className="upper-box">
        <h2>Create team</h2>
      </div>
      <div className="lower-box">
        <div className="box">
          <div style={{ textAlign: "center", marginLeft: "50%" }}>
           
            <Selected selected={selected} />
          </div>
          <div className="crbox">CREDITS LEFT : {creditsLeft}</div>
        </div>
        <h3>click on players to select them</h3>
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
      <Card selected={selected} setSelected={setSelected} creditleft={creditsLeft} />
    </div>
  );
}
