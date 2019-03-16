import React from "react";
import InputParamField from "./InputParamField"
import CheckboxField from "./CheckboxField"


class ParametrsForm extends React.Component {
    // state=this.props;
  state = {
    amountPoint: 50,
    valMinX: 0,
    valMaxX: 100,
    valMinY: 0,
    valMaxY: 100,
    checkedGrid: true,
    checkedLabelAxis: true
  };

  onAmountPointChange = event => {
    this.setState({
      amountPoint: event.target.value
    })
  };

  onMinXChange = event => {
    this.setState({
      valMinX: event.target.value
    })
  };

  onMaxXChange = event => {
    this.setState({
      valMaxX: event.target.value
    })
  };

  onMinYChange = event => {
    this.setState({
      valMinY: event.target.value
    })
  };

  onMaxYChange = event => {
    this.setState({
      valMaxY: event.target.value
    })
  };

  // читтерство
  onGridChange = event => {
    this.props.updateGridAndLabel(!this.state.checkedGrid,this.state.checkedLabelAxis);
    this.setState({
      checkedGrid: !this.state.checkedGrid
    });
  }

  onLabelChange = event => {
    this.props.updateGridAndLabel(this.state.checkedGrid,!this.state.checkedLabelAxis);
    this.setState({
      checkedLabelAxis: !this.state.checkedLabelAxis
    });
  }

  render() {
    const { amountPoint, valMinX, valMaxX, valMinY, valMaxY, checkedGrid, checkedLabelAxis } = this.state;

    return (
      <div id="controlPanel">
        <InputParamField label="Количество точек "
                          id="countPoints"
                          value={amountPoint}
                          onChange={this.onAmountPointChange} />
        <p>
          <InputParamField label="Диапазон начений по оси X: от "
                          id="minX"
                          value={valMinX}
                          onChange={this.onMinXChange} />
          <InputParamField label=" до "
                          id="maxX"
                          value={valMaxX}
                          onChange={this.onMaxXChange} />
        </p>
        <p>
          <InputParamField label="Диапазон начений по оси Y: от "
                          id="minY"
                          value={valMinY}
                          onChange={this.onMinYChange} />
          <InputParamField label=" до "
                          id="maxY"
                          value={valMaxY}
                          onChange={this.onMaxYChange} />
        </p>




        {/* <p>Количество точек:<input type="text" id="countPoints" value="50" /></p> */}
        {/* <RangeValueAxisField nameAxis="X" valMin={valMinX} valMax={valMaxX} idMin="minX" idMax="maxX"  />
        <RangeValueAxisField nameAxis="Y" valMin={valMinY} valMax={valMaxY} idMin="minY" idMax="maxY"  /> */}
        {/* <p>Диапазон значений по оси X: от <input type="text" id="minX" value="0" /> до <input type="text" id="maxX" value="100" /> </p> */}
        {/* <p>Диапазон значений по оси Y: от <input type="text" id="minY" value="0" /> до <input type="text" id="maxY" value="100" /> </p> */}
        <p>
          <CheckboxField label="Сетка" 
                          idCbx="grid" 
                          checked={checkedGrid} 
                          onChange={this.onGridChange} />
          <CheckboxField label="Метки" 
                          idCbx="tags" 
                          checked={checkedLabelAxis} 
                          onChange={this.onLabelChange} />
        </p>

        {/* onChange={() => { this.props.updateGridAndLabel(this.state.checkedGrid, */}
                          {/* //                                                 this.state.checkedGrid)}} /> */}

        {/* <p>Сетка <input type="checkbox" id="grid" checked /> Метки <input type="checkbox" id="tags" checked /> </p> */}
        {/* <p><input type="button" value="Построить график" onClick="updateChart()" /></p> */}
        {/* <p><input type="button" value="Построить график" onClick="drawChart()" /></p> */}
        <p><input type="button" value="Перестроить график" onClick={() => { 
          this.props.updateData(this.state.amountPoint, 
                                this.state.valMinX, 
                                this.state.valMaxX, 
                                this.state.valMinY, 
                                this.state.valMaxY, 
                                this.state.checkedGrid,
                                this.state.checkedLabelAxis)}} />
        </p>

        {/* <p><input type="button" value="Убрать сетку" onClick="delGrid()" />        <input type="button" value="Убрать метки" onclick="delLabel()" /></p>
        <p><input type="button" value="Добавить сетку" onClick="addGrid()" />        <input type="button" value="Добавить метки" onclick="addLabel()" /></p> */}
      </div>
    );
  }
}

export default ParametrsForm;