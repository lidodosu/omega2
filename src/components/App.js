import React from "react";
import ParametrsForm from "./ParametrsForm"
import Chart from "./Chart"

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
// state = {
        amountPoint: 50,
        minX: 0,
        maxX: 100,
        minY: 0,
        maxY: 100,
        checkedGrid: true,
        checkedLabelAxis: true,
        reDraw: false
      };

// handleFilterTextChange = this.handleFilterTextChange.bind(this);

      // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

  handleFilterTextChange(amountPoint) {
    var aaa = amountPoint;
    // this.setState({
    //   amountPoint: amountPoint
    // });
  }

  

  updateData = (amount, valMinX, valMaxX, valMinY, valMaxY, chkGrid, chkLabel) => {
    this.setState({ 
      amountPoint: amount,
      minX: valMinX,
      maxX: valMaxX,
      minY: valMinY,
      maxY: valMaxY,
      reDraw: true
      // checkedGrid: chkGrid,
      // checkedLabelAxis: chkLabel
    })
 };

  updateGridAndLabel = (chkGrid, chkLabel) => {
    this.setState({ 
      checkedGrid: chkGrid,
      checkedLabelAxis: chkLabel,
      reDraw: false
    })

// this.setState(() => {   
//     return {
//       reDraw: false, 
//       checkedGrid: chkGrid,
//       checkedLabelAxis: chkLabel,
//     }
//   });

  // console.log("App:", this.state.checkedGrid, " (", chkGrid, ") ", this.state.checkedLabelAxis, " (", chkLabel, ") ");
  };

  render() {
    return (
    <div>
      <h1>Визуализация линейной диаграммы на рандомно сгенерированных данных</h1>
      <ParametrsForm updateData={this.updateData} 
                    updateGridAndLabel={this.updateGridAndLabel}
                    // onAAmountPointChange={this.handleFilterTextChange}
                    amountPoint={this.state.amountPoint}
                    minX={this.state.minX} 
                    maxX={this.state.maxX} 
                    minY={this.state.minY} 
                    maxY={this.state.maxY}
                    checkedGrid={this.state.checkedGrid}
                    checkedLabelAxis={this.state.checkedLabelAxis}
      />
      <Chart amountPoint={this.state.amountPoint}
            minX={this.state.minX} 
            maxX={this.state.maxX} 
            minY={this.state.minY} 
            maxY={this.state.maxY}
            checkedGrid={this.state.checkedGrid}
            checkedLabelAxis={this.state.checkedLabelAxis}
            reDraw={this.state.reDraw}
       />
    </div>
    );
  };
};

export default App;