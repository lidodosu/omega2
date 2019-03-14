import React from "react";
import AmountPointField from "./AmountPointField"
import RangeValueAxisField from "./RangeValueAxisField"
import CheckboxField from "./CheckboxField"


class ParametrsForm extends React.Component {
  state = {
    amountPoint: "55",
    valMinX: 0,
    valMaxX: 100,
    valMinY: 0,
    valMaxY: 100
  };

  // onAmountPointChange = event =>
  // this.setState({
  //   amountPoint: event.target.value
  // });

  onAmountPointChange = event => {
  this.setState({
    amountPoint: event.target.value
  });
    console.log("2:  ", this.state.amountPoint);
  };

  // onAmountPointChange(e) {
  // this.setState({
  //   amountPoint: event.target.value
  // };

  // onSpeedChange(e) {
  //   this.setState({speed: e.target.value});
  // }


  render() {
    const { amountPoint, valMinX, valMaxX, valMinY, valMaxY } = this.state;
    // {console.log(amountPoint)};

    return (
      <div>
        <AmountPointField amountPoint={amountPoint}
                          onChange={this.onAmountPointChange} />
        {/* <p>Количество точек:<input type="text" id="countPoints" value="50" /></p> */}
        <RangeValueAxisField nameAxis="X" valMin="5" valMax="50"/>
        <RangeValueAxisField nameAxis="Y" valMin="5" valMax="50"/>
        {/* <p>Диапазон значений по оси X: от <input type="text" id="minX" value="0" /> до <input type="text" id="maxX" value="100" /> </p> */}
        {/* <p>Диапазон значений по оси Y: от <input type="text" id="minY" value="0" /> до <input type="text" id="maxY" value="100" /> </p> */}
        <p>
          <CheckboxField label="Сетка" idCbx="grid" />
          <CheckboxField label="Метки" idCbx="tags" />
        </p>

        {/* <p>Сетка <input type="checkbox" id="grid" checked /> Метки <input type="checkbox" id="tags" checked /> </p> */}
        <p><input type="button" value="Построить график" onClick="updateChart()" /></p>

        {/* <p><input type="button" value="Убрать сетку" onClick="delGrid()" />        <input type="button" value="Убрать метки" onclick="delLabel()" /></p>
        <p><input type="button" value="Добавить сетку" onClick="addGrid()" />        <input type="button" value="Добавить метки" onclick="addLabel()" /></p> */}
      </div>
    );
  }
}

export default ParametrsForm;