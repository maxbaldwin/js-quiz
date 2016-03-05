var button = document.getElementById("Trees");

button.addEventListener("click", checkThis);
addEventListener("keypress", checkReturn);

function checkReturn (e){
  if (e.keyCode == 13){
   checkThis()
  }
}

function submittedValue() {
  var treeForming = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value
  };
  buildTree(treeForming)
}

function checkThis() {
  var treeHeight = document.getElementById("height");
  var treeSymbol = document.getElementById("symbol");
  if(treeHeight.value === "" || tree.symbol === "" ) {
    alert("You forgot to enter either a number or a symbol, GO BACK!")
  } else {
      submittedValue();
  }
}

function buildTree (tree) {
    var maxsymbol = (2 * tree.height -1)
    var space = " ";
  for (var i = 0; i < tree.height; i++) {
    var spaces = maxsymbol - (i+(i+1));
    var treeSymbol = space.repeat(spaces/2)+tree.symbol.repeat(i+(i+1));
    console.log(treeSymbol);
}
}