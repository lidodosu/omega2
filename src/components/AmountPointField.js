import React from "react";

// const Am = ({name, onChange, onBlur, error, label}) => (
//   <div style={style.inputGroup}>
//     <label>
//       {label}
//       <input
//         style={style.input}
//         type="text"
//         name={name}
//         onChange={onChange}
//         onBlur={onBlur}
//       />
//       {error && <div style={style.error}>{error}</div>}
//     </label>
//   </div>
// );

const AmountPointField = ({amountPoint, onChange}) => (
  <div>
    <p>Количество точек:
      <input
        type="text"
        id="countPoints"
        value={amountPoint}
        onChange={onChange}
      />
    </p>
  </div>
);


/* <p>Количество точек:<input type="text" id="countPoints" value="50" /></p> */

export default AmountPointField;