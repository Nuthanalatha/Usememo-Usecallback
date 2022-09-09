import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEven is exicuted");

    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counterTwo % 2 === 0;
  }, [counterTwo]);

  return (
    <div>
      <h1>Counter one {counterOne}</h1>
      <h1>counterTwo {counterTwo}</h1>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={incrementCounterOne}>incrementCounterOne</button>
      <button onClick={incrementCounterTwo}>incrementCounterTwo</button>
    </div>
  );
};

export default Counter;
