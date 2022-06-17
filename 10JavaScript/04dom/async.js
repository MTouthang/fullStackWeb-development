const uno = () => {
  console.log("I am one");
};

const dos = () => {
  setTimeout(() => {
    console.log("wow");
  }, 3000);
  console.log("i am two");
};

const tres = () => {
  console.log("i am three");
};

uno();
dos();
tres();
