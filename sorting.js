// 🫧 Bubble Sort (O(n²) Time, O(1) Space)
let bubble_sort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log("Bubble Sort:", bubble_sort([5, 3, 8, 4, 2]));

// 🌍 Selection Sort (O(n²) Time, O(1) Space)
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
  return arr;
};
console.log("Selection Sort:", selection_sort([90, 80, 70, 60]));

// 🏗 Insertion Sort (O(n²) Time, O(1) Space)
let insertion_sort = (arr) => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
console.log("Insertion Sort:", insertion_sort([90, 80, 20, 10]));

// 🌐 Merge Sort (O(n log n) Time, O(n) Space)
let merge_sort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(merge_sort(left), merge_sort(right));
};

let merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));  // ✅ Fixed merge() function
};
console.log("Merge Sort:", merge_sort([90, 80, 20, 10]));

// ⚡ Quick Sort (O(n log n) Time, O(n) Space)
let quick_sort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick_sort(left).concat([pivot], quick_sort(right));
};
//console.log("Quick Sort:", quick_sort([90, 80, 20, 10]));

// 🔎 Binary Search (O(log n) Time, O(1) Space)
let binary_search = (arr, target) => {
  arr.sort((a, b) => a - b); // ✅ Sorting needed
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
console.log("Binary Search (target 10):", binary_search([20, 25, 35, 10, 20], 10));
