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


}

function reduceAlgorithm
