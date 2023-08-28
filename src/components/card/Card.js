import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
function Card({ imagen ,data }) {
  const [show, setShown] = useState(false);
  const props3 = useSpring({
    opacity: 1,
    transform: show ? "" : "",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",

  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >

      <div  className="p-2  border rounded-2xl border-[#FFFFFF80]">
      <img src={imagen} alt="" className="object-cover"/>
      <div className="flex justify-between">
        <h2>Diety-1</h2>
        <h2>#{data}</h2>
      </div>
      </div>
    </animated.div>
  );
}

export default Card;
