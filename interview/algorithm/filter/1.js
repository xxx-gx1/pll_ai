const arr = [1, 2, 3, 4, 5];

const res = arr.filter((item) => item > 2);
console.log(res);
// 时间复杂度? O(n)
// 能优化吗？ 不能优化
// 但是如果再告知已经排好序的前提下 
// 二分实现
const index = arr.findIndex((item) => item > 2);
const result = arr.slice(index);
console.log(result);
let left = 0;
let right = arr.length - 1;
let mid = Math.floor((left + right) / 2);