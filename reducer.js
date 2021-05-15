// file in which the reducing algorithm takes place!

function reduceMatrix() {
  var matrix = [];
  for (var i = 0; i < 4; ++i) {
    matrix[i] = [];
    for (var j = 0; j < 4; ++j) {
      var input = "e" + (i+1) + "x" + (j+1);
      var value = document.getElementById(input).value;
      if (value == "") {/*
        while (matrix.hasChildNodes()) {
          matrix.removeChild(matrix.lastChild);
        }*/
        alert("Please only enter numbers");
        return;
      } else {
        matrix[i].push(value);
      }
    }
  }
  console.log(matrix);
  printMatrix(matrix);
  return false;
}

function gaussJordanReduction(matrix) {

}

function printMatrix(matrix) {
  var body = document.getElementById("matrixInputted");
  var table = document.createElement("table");

  for (var i = 0; i < 4; ++i) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 4; ++j) {
      var td = document.createElement("td");
      var cell = document.createTextNode(matrix[i][j]);
      td.appendChild(cell);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  body.appendChild(table);
}
