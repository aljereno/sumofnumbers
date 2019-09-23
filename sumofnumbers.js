const testData = [10, 20, 30, 40, 50];

function sumFour(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function recursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + recursion(data.slice(1, data.length));
}

function sumTheSimpleWay(data) {
  return _.reduce(data, (memo, num) => memo + num);
}
console.log(sumFour(testData));
console.log(sumWhile(testData));
console.log(recursion(testData));
console.log(sumTheSimpleWay(testData));
