// we will do sorting alo like🫧  bubble sort ,🌐 merge sort, insertion sort , quck sort,than binary serach

// bubble sort fisrt i'll run loop from zero index and second loop  then we we all need to skip what element we have sorted

let bubble_sort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
//console.log(bubble_sort([5,3,8,4,2]))
// ⌚⌛ o(n2)
// 🚀   0(1)

let selection_sort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log(arr)
  return arr;
};
console.log(selection_sort([90, 80, 70, 60]));
// ⌚⌛ o(n2)
// 🚀   0(1)
