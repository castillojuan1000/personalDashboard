import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";
import Quote from "./Quote";
import axios from "axios";
import Timer from "./Timer";
import Quote1Image from '../img/quote1.jpg'

const backgroundImage = {
  backgroundImage: `url(${Quote1Image})`,
  height: '20vh',
  width: "100%",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

export default function TimerAndQuote() {
  const [quote, setQuote] = useState({});
  const [index, setIndex] = useState(null);
  const [staticQuote, setStaticQuote] = useState({});
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(3600000);

  useInterval(() => {
    const randomNumber = Math.floor(Math.random() * 1643);
    setIndex(randomNumber);
  }, timeInMilliseconds);

  useEffect(() => {
    axios.get(`https://type.fit/api/quotes`).then(data => {
      const quotesArray = data.data;

      setQuote(quotesArray[index]);
    });
  }, [index]);

  useEffect(() => {
    axios.get(`https://type.fit/api/quotes`).then(data => {
      const quotesArray = data.data;
      const randomNumber = Math.floor(Math.random() * 1643);
      setStaticQuote(quotesArray[randomNumber]);
    });
  }, []);

  const handleTime = e => {
    const milliseconds = +e.currentTarget.dataset.milliseconds;
    setTimeInMilliseconds(milliseconds);
  };
  console.log(staticQuote)
  return (
    <div className="quote" style={backgroundImage}>
      <Timer handleTime={handleTime} />
      <Quote quote={quote} staticQuote={staticQuote} />
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
