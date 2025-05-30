"use client";

import React from "react";
import Wavify from "react-wavify";

const Wave = () => {
  return (
    <div
      className="absolute -bottom-14 w-full h-[100px] pointer-events-none z-10"
      style={{ transform: "rotate(180deg)" }}
    >
      {/* Layer 1 - Back */}
      <Wavify
        fill="rgba(213, 247, 254, 1)" 
        paused={false}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.12,
          points: 2,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Layer 2 - Middle */}
      <Wavify
        fill="rgba(213, 247, 254, 0.6)" 
        paused={false}
        options={{
          height: 35,
          amplitude: 50,
          speed: 0.18,
          points: 4,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Layer 3 - Front */}
      <Wavify
        fill="rgba(213, 247, 254, 0.3)"
        paused={false}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.25,
          points: 5,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Wave;
