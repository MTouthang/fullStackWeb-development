/**
 * Define a function that can answer the user role
 * a user can be on the following roles:
 *
 * admin - witt all access
 * subadmin - with access to create and delete courses
 * testprep - with access to create and delete tests
 * user - consume all content
 * other - trials user
 *
 */

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin will all access`;
    case "subadmin":
      return `${name} is subadmin with create and delete access`;
    case "testprep":
      return `${name} is testprep with create and delete access`;
    case "user":
      return `${name} is user with consume all content`;
    default:
      return `${name} is a trial user`;
  }
}

console.log(getUserRole("Mang", "user"));

var getRole = getUserRole("touthang", "admin");
console.log(getRole);
