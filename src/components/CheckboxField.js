import React from "react";

const CheckboxField = ({label, idCbx, checked, onChange}) => (
    <div>
        {label} 
        <input 
            type="checkbox" 
            id={idCbx} 
            checked={checked}
            onChange={onChange}
        /> 
    </div>
);

export default CheckboxField;