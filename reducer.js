// file in which the reducing algorithm takes place!

function reduceMatrix() {
  var matrix = [];
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      var input = "e" + (i+1) + "x" + (j+1);
      var value = document.getElementById(input);
      matrix.push(input);
    }
  }

  printMatrix(matrix);
}

function printMatrix(matrix) {
  var body = document.getElementsByTagName("body");
  var table = document.createElement("table");

  for (var i = 0; i < 4; ++i) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 4; ++j) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(matrix[i+j]));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  body.appendChild(table);
}
