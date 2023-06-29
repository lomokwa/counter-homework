import { useState } from "react";

export default function Body() {
  const [counter, setCounter] = useState(2);

  return (
    <>
      <section className="flex-container">
        <div>
          <h2>{counter}</h2>
        </div>
        <div>
          <button onClick={ () => { setCounter(counter**2) } }>x<sup>2</sup></button>
          <button onClick={ () => { setCounter(Math.sqrt(counter)) } }>x<sup>1/2</sup></button>
          <button onClick={ () => { setCounter(2) } }>Reset</button>
        </div>
      </section>
    </>
  );
}