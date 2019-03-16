import React from "react";
import ParametrsForm from "./ParametrsForm"
import Chart from "./Chart"

  class App extends React.Component {
  state = {
    amountPoint: 50,
    minX: 0,
    maxX: "",
    minY: "",
    maxY: "",
    checkedGrid: true,
    checkedLabelAxis: true
  };

  updateData = (amount, valMinX, valMaxX, valMinY, valMaxY, chkGrid, chkLabel) => {
    this.setState({ 
      amountPoint: amount,
      minX: valMinX,
      maxX: valMaxX,
      minY: valMinY,
      maxY: valMaxY,
      // checkedGrid: chkGrid,
      // checkedLabelAxis: chkLabel
    })
 };

 updateGridAndLabel = (chkGrid, chkLabel) => {
  this.setState({ 
    checkedGrid: chkGrid,
    checkedLabelAxis: chkLabel
  })
  // console.log("App:", this.state.checkedGrid, " (", chkGrid, ") ", this.state.checkedLabelAxis, " (", chkLabel, ") ");
  };

  render() {
    return (
    <div>
      <ParametrsForm updateData={this.updateData} updateGridAndLabel={this.updateGridAndLabel}/>
      <Chart amountPoint={this.state.amountPoint}
            valMinX={this.state.minX} 
            valMaxX={this.state.maxX} 
            valMinY={this.state.minY} 
            valMaxY={this.state.maxY}
            checkedGrid={this.state.checkedGrid}
            checkedLabelAxis={this.state.checkedLabelAxis}
       />
    </div>
    );
  };
};

export default App;