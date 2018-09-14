var animal = "dog"

function myAnimal() {
return animal
}
//A function can access all variables defined from the outside the function

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}
//A function can access all variables defined inside the function

var n = 193
function add2(n) {
    const two = 2
  return n + two

  // Feel free to move things around!
}

var theFunk = "FUNKY!"
  function funkyFunction() {
  return theFunk

}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
console.log(funkyFunction)

