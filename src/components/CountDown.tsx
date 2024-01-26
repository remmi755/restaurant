"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-01-01");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <Countdown
          className="font-bold text-5xl text-yellow-300"
          date={endingDate}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CountDown;
