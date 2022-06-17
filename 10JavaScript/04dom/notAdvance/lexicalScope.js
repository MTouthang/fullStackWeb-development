function init() {
  var firstName = "Tom";
  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName;
}

var value = init();

value();
