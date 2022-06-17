var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your first name is : ${this.firstName}`);
};

var mang = new User("Mang", 2);

if (mang.hasOwnProperty("firstNamee")) {
  mang.getFirstName();
}

console.log(mang);
var touthang = new User("touthang", 2);

console.log(touthang);
