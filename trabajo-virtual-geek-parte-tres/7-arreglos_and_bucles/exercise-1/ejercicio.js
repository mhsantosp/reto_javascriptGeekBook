function workWithMovies() {
  var arr = [];
  arr.push("luci");
  arr.push("resident evil");
  arr.push("vengadores");
  console.log(...arr);
  arr.push("nemo");
  console.log(...arr);
  arr.pop();
  arr.push("hulk");
  console.log(...arr);
  arr.splice(0, 1, "the guason");
  console.log(...arr);
}

workWithMovies();
