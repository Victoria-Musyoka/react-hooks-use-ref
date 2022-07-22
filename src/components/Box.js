import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  const handleMeasureClick = () => {
    const div = elementRef.current;
    console.log("Measuerments:", div.getBoundingClientRect());
  };

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;