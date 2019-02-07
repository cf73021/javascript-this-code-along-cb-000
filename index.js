function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  }
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
// add name to the blt before serving
blt.name = "BLT";
blt.serve();
function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}
