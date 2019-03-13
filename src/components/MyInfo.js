import React from "react"

function MyInfo() {
    return (
      // <div>
      //   <h1>Bob Ziroll</h1>
      //   <p>This is a paragraph about me...</p>
      //   <ul>
      //     <li>Thailand</li>
      //     <li>Japan</li>
      //     <li>Nordic Countries</li>
      //   </ul>
      // </div>

      <div>
        <p>Количество точек:<input type="text" id="countPoints" value="50" /></p>
        <p>Диапазон значений по оси X: от <input type="text" id="minX" value="0" /> до <input type="text" id="maxX" value="100" /> </p>
        <p>Диапазон значений по оси Y: от <input type="text" id="minY" value="0" /> до <input type="text" id="maxY" value="100" /> </p>
        <p>Сетка <input type="checkbox" id="grid" checked / > Метки <input type="checkbox" id="tags" checked /> </p>
        <p><input type="button" value="Построить график" onclick="updateChart()" /></p>
        <p><input type="button" value="Убрать сетку" onclick="delGrid()" />        <input type="button" value="Убрать метки" onclick="delLabel()" /></p>
        <p><input type="button" value="Добавить сетку" onclick="addGrid()" />        <input type="button" value="Добавить метки" onclick="addLabel()" /></p>
      </div>
    )
}

export default MyInfo