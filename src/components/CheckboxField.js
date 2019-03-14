import React from "react";

const CheckboxField = ({label, idCbx}) => (
    <div>
        {label} 
        <input 
            type="checkbox" 
            id={idCbx} 
            // checked 
        /> 
    </div>
);

export default CheckboxField;