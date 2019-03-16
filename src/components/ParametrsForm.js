import React from "react";
import * as d3 from "d3";
import InputParamField from "./InputParamField"
import CheckboxField from "./CheckboxField"


class ParametrsForm extends React.Component {
    state=this.props;

    // constructor(props) {
    //   super(props);
    //   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    // }

    // handleFilterTextChange(e) {
    //   this.props.onAAmountPointChange(e.target.value);
    // }

  onAmountPointChange = event => {
    this.setState({
      amountPoint: event.target.value
    })
  };

  onMinXChange = event => {
    this.setState({
      minX: event.target.value
    })
  };

  onMaxXChange = event => {
    this.setState({
      maxX: event.target.value
    })
  };

  onMinYChange = event => {
    this.setState({
      minY: event.target.value
    })
  };

  onMaxYChange = event => {
    this.setState({
      maxY: event.target.value
    })
  };

  // читтерство ?
  onGridChange = event => {
    this.props.updateGridAndLabel(!this.state.checkedGrid,this.state.checkedLabelAxis);
    this.setState({
      checkedGrid: !this.state.checkedGrid
    });
    // console.log(event.target.checked);
  }

  onLabelChange = event => {
    this.props.updateGridAndLabel(this.state.checkedGrid,!this.state.checkedLabelAxis);
    this.setState({
      checkedLabelAxis: !this.state.checkedLabelAxis
    });
  }

  render() {
    const { amountPoint, minX, maxX, minY, maxY, checkedGrid, checkedLabelAxis } = this.state;

    return (
      <div id="controlPanel">
        <InputParamField label="Количество точек "
                          id="countPoints"
                          value={amountPoint}
                          // onChange={this.handleFilterTextChange}
                          onChange={this.onAmountPointChange} 
        />
        <p>
          <InputParamField label="Диапазон начений по оси X: от "
                          id="minX"
                          value={minX}
                          onChange={this.onMinXChange} />
          <InputParamField label=" до "
                          id="maxX"
                          value={maxX}
                          onChange={this.onMaxXChange} />
        </p>
        <p>
          <InputParamField label="Диапазон начений по оси Y: от "
                          id="minY"
                          value={minY}
                          onChange={this.onMinYChange} />
          <InputParamField label=" до "
                          id="maxY"
                          value={maxY}
                          onChange={this.onMaxYChange} />
        </p>


        {/* <p>Количество точек:<input type="text" id="countPoints" value="50" /></p> */}
        {/* <RangeValueAxisField nameAxis="X" valMin={minX} valMax={maxX} idMin="minX" idMax="maxX"  />
        <RangeValueAxisField nameAxis="Y" valMin={minY} valMax={maxY} idMin="minY" idMax="maxY"  /> */}
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
          this.props.updateData(amountPoint, 
                                minX, 
                                maxX, 
                                minY, 
                                maxY, 
                                checkedGrid,
                                checkedLabelAxis)}} />
        </p>

        {/* <p><input type="button" value="Убрать сетку" onClick="delGrid()" />        <input type="button" value="Убрать метки" onclick="delLabel()" /></p>
        <p><input type="button" value="Добавить сетку" onClick="addGrid()" />        <input type="button" value="Добавить метки" onclick="addLabel()" /></p> */}
      </div>
    );
  }
}

export default ParametrsForm;