/**
 *  Create an application with the following roles
 * 1.admin - get full access
 * 2.subadmin - get access to create/delete course
 * 3. testprep - get access to create / delete tests
 * 4. user- get access to consume content
 */

var user = "testprep";

switch (user) {
  case "admin":
    console.log("You get the full access");
    break;
  case "subadmin":
    console.log("You get the access to create/delete course");
    break;
  case "testprep":
    console.log("You get the access to create/delete course");
    break;
  case "user":
    console.log("get access to consume content");
  default:
    console.log("Trial user");
    break;
}
