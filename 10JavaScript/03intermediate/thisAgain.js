console.log(this);

var user = {
  firstName: "mang",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("hello");
      console.log("LINE 10", this);
    }
    sayHello();
  },
};

console.log(user.getCourseCount());
