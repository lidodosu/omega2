import React from "react";

/* <p>Диапазон значений по оси X: от <input type="text" id="minX" value="0" /> до <input type="text" id="maxX" value="100" /> </p> */

const RangeValueAxisField = ({nameAxis, valMin, valMax}) => (
    <div>
       <p>
           Диапазон значений по оси {nameAxis}: от  
           <input type="text" id="minX" defaultValue={valMin} />
           до 
           <input type="text" id="maxX" defaultValue={valMax} />
        </p>
    </div>
);

export default RangeValueAxisField;