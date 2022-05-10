function arrayDiff(a, b) {
  let res = [...a];
  for (let i = 0; i < b.length; i++) {
    let index = a.indexOf(b[i]);
    if (index >= 0) {
      res = res.filter((el) => el !== b[i]);
    }
  }
  return res;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
