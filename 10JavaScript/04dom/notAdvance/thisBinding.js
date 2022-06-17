const me = {
  firstName: "Me",
  lastName: "Touthang",
  courseCount: 3,
  role: "Admin",
  getInfo: function () {
    console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            His role is ${this.role}
            and he is studying in ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub  admin",
  courseCount: 4,
};
me.getInfo();

me.getInfo.bind(dj); // binds and pass reference
me.getInfo.bind(dj)(); // bind and pass reference
me.getInfo.call(dj); // bind and call immediately
