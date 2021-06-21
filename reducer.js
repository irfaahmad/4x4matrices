// file in which the reducing algorithm takes place!
const rowNum = 4;
const colNum = 4;

function reduceMatrix() {
  var matrix = [];
  for (var i = 0; i < rowNum; ++i) {
    matrix[i] = [];
    for (var j = 0; j < colNum; ++j) {
      var input = "e" + (i+1) + "x" + (j+1);
      var value = document.getElementById(input).value;
      if (value == "") {
        alert("Please only enter numbers");
        return;
      } else {
        matrix[i].push(value);
      }
    }
  }

  matrix = reduction(matrix);
  console.log(matrix);
  printMatrix(matrix);
  return false;
}

function reduction(matrix) {
  var curx = 0;
  for (var r = 0; r < rowNum; ++r) {
    if (colNum <= curx) {
      return matrix;
    }
    var row = r;
    while (matrix[row][curx] == 0) {
      ++row;
      if (rowNum == row) {
        row = r;
        ++curx;
        if (colNum == curx) {
          return matrix;
        }
      }
    }
    var temp = matrix[row];
    matrix[row] = matrix[r];
    matrix[r] = temp;

    var curv = matrix[r][curx];
    for (var j = 0; j < colNum; ++j) {
      matrix[r][j] /= curv;
    }

    for (var i = 0; i < rowNum; ++i) {
      if (i == r) continue;
      curv = matrix[i][curx];
      for (var j = 0; j < colNum; ++j) {
        matrix[i][j] -= curv * matrix[r][j];
      }
    }
    ++curx;
  }
  return matrix;
}

function printMatrix(matrix) {
  var body = document.getElementById("matrixTable");
  var table = document.createElement("table");

  while (body.hasChildNodes()) {
    body.removeChild(body.lastChild);
  }

  for (var i = 0; i < rowNum; ++i) {
    var tr = document.createElement("tr");
    for (var j = 0; j < colNum; ++j) {
      var td = document.createElement("td");
      console.log(matrix[i][j]);
      var cell = document.createTextNode(matrix[i][j]);
      td.appendChild(cell);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  body.appendChild(table);
}
