import React, { useEffect, useState } from "react";

export default function Selected({ selected }) {
  console.log({ selected });

  return (
    <div>
      <div style={{ display: "flex" }}>
        
        {selected.map((player) => (
          <div className="inner-box">{player.credit}</div>
        ))}
      </div>
    </div>
  );
}
