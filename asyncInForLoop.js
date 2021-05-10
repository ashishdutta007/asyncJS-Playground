// 1
// async function that resolves after 1sec
const waitFor = (a) => {
  return new Promise((r) => {
    setTimeout(() => r(a), 1000);
  });
};
var arr = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }];

arr.forEach(async (a, index) => {
  console.log("Index ", index);
  const res = await waitFor(a.val + 10);
  console.log("Waited for... ", res);
  a["res"] = res;
});
console.log("----Done---", arr);

// 2
// async function that resolves after 1sec
const waitFor = (a) => {
  return new Promise((r) => {
    setTimeout(() => r(a), 1000);
  });
};
var arr = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }];

const brr = arr.map(async (a, index) => {
  console.log("Index ", index);
  const res = await waitFor(a.val + 10);
  console.log("Waited for... ", res);
  a["res"] = res;
  return a;
});

Promise.all(brr).then((values) => {
  console.log("---Resolved all---", brr);
});

console.log("----- The End -----");
