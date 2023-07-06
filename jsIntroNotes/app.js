const arr = Array(100).fill(0);
const arr3 = [...Array(100).keys()];
const arr2 = Array(100)
  .fill(0)
  .map((_, i) => i * 2);

for (const [i, val] of arr2.entries()) {
  console.log("Index: ", i, "Value: ", val);
}
