//console.log(global);

setTimeout(() => {
  console.log("in timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in interval");
}, 1000);

console.log(__dirname); // gives current directory address
console.log(__filename); // gives current file address
