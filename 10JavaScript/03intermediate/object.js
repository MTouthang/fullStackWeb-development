var user = {
  firstName: "Mang",
  lastName: "Touthang",
  role: "admin",
  loginCount: 32,
  faceBookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  CourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
  },
};
var courseList = true;

console.log(user.firstName);
// console.log(user["firstName"]);

// user.loginCount = 44;

// console.log(user.loginCount);
// console.log(user);
console.table(user);

console.log(user.CourseCount());
user.buyCourse("Mern stack");
console.log(user.CourseCount());
