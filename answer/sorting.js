// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

const sortAccending = (arr) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(
  "Result Accending : ",
  sortAccending([1, 3, 5, 7, 9, 2, 4, 6, 8, 10])
);
// expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sortDecending = (arr) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(
  "Result Decending: ",
  sortDecending([1, 3, 5, 7, 9, 2, 4, 6, 8, 10])
);
// expected output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
