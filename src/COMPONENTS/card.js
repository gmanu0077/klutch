import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card({ selected, setSelected }) {
  const [roster1, setRoster1] = useState([]);
  const [roster2, setRoster2] = useState([]);

  const select = (player) => {
    setSelected([...selected, player]);
  };

  const load = async () => {
    const response = await axios.get(
      "https://api.klutchh.in/v1/rosters/128622/129859?game_type=false"
    );
    setRoster1(response.data.data.roster1);
    setRoster2(response.data.data.roster2);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="t1list">
        {roster1.map((player) => {
          const { name, credit, id } = player;
          return (
            <div className="container" onClick={() => select(player)}>
              <ul className="playercard1">
                <li>
                  <div className="pl-img"></div>
                </li>
                <li>
                  <div className="plname">{name}</div>
                  <p className="credit">{credit}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="t2list">
        {roster2.map((player) => {
          const { name, credit, id } = player;
          return (
            <div className="container2" onClick={() => select(credit, name)}>
              <ul className="playercard2">
                <li>
                  <div className="pl-img"></div>
                </li>
                <li>
                  <div className="plname">{name}</div>
                  <p className="credit">{credit}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <button>PREVIEW SELECTION</button>
    </div>
  );
}
