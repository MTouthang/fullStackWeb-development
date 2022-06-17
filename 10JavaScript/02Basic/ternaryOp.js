/**
 *  Shows a user a signout button if he is authenticated
 * otherwise show him option to login/singup
 */

var authentication = false;

if (authentication) {
  console.log("show signout button");
} else {
  console.log("show login button");
}

authentication ? console.log("signout button") : console.log("login");
