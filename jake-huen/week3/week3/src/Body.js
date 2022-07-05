import React, { useState } from "react";

const Body = () => {
  const [time, setTime] = useState("현재시간");

  const currentTime = () => {
    const date = new Date();
    const years = String(date.getFullYear());
    const mounth = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTime(`${years} / ${mounth} / ${day} ${hours}:${minutes}:${seconds}`);
  };

  // yyyy / MM / dd HH:mm:ss
  const startTimer = () => {
    setInterval(currentTime, 1000);
  };
  startTimer();
  return <div>{time}</div>;
};

export default Body;
