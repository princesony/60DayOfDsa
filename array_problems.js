// sum of two elemnt

let sum_two = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }

  return a + b;
};

// check case
// console.log(sum_two(5,7)) // 12
// console.log(sum_two(5,"7")) // Invalid input

//find minmun from array
let array_data = [50, 4, 9, 1];
//let min = Math.min.apply({},array_data)
//let min = array_data.toSorted()[0]

// let min = (arr)=>{

//     let min = arr[0]
//     for(let i= 0;i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
// }
// console.log(min(array_data))

// let max = Math.max(...array_data)
let max = (arr) => {
  if (arr.length <= 1) {
    return arr[0];
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
//console.log(max(array_data))

// write funtion that return reverse string but dont use reverse method using reverse method

let name = "prince kumar soni";

let reverse_string = (data) => {
  let result = [];
  for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }
  return result.join("");
};
//console.log(reverse_string(name));

// remove duplicate array elemnt without using new set method
let array = [1, 2, 3, 4, 5, 2, 3, 4];
let unique_array = (arr) => {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    // if(!data.includes(arr[i])){
    //     data.push(arr[i])
    // }
    // if(!data.find(item => item === arr[i])){
    //     data.push(arr[i])
    // }
    if (data.indexOf(arr[i]) == -1) {
      data.push(arr[i]);
    }
  }
  return data;
};
//console.log(unique_array(array))

//write funtion to get index of element

let find_index = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
//console.log(find_index(array, 5));


// merge two array without duplicate
let array1 = [1, 2, 3];
let array2 = [4, 5, 6,6];
let merge_array = (arr1, arr2) => {
    let result = [...new Set(arr1), ...new Set(arr2)];
    return result;
}
//console.log(merge_array(array1, array2));


//count duplicate how many times an element appears in an array
let count_duplicate = (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
        if (data[arr[i]]) {
            data[arr[i]] += 1;
        }
        else {
            data[arr[i]] = 1;
        }
    }
    return data
}
//console.log(count_duplicate(array))


//find even numbers from array 
let find_even = (arr) => {
    // let data = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         data.push(arr[i])
    //     }
    // }
    // return data;
    //return arr.filter(num => num % 2 !== 0); for odd number

}
//console.log(find_even(array))

// convert array element into sentence 
let sentence = ["prince" ,"soni","ramgarh"]
let convert_sentence = (arr) => {
  return arr.join(" ")
}
//console.log(convert_sentence(sentence))

// rotate array left to right by k positon 

let rotate_method = (arr,tar)=>{
    let target = tar%arr.length
    let result = [...arr.slice(-target),...arr.slice(0,arr.length-target)];
    return result

}
//console.log(rotate_method([1,2,3,4,5],2))


// find missing number from array 

let find_missing_number = (arr)=>{
    let len = arr.length+1
    let total = len*(len+1)/2
    let sum = arr.reduce((a,b)=>a+b,0)
    return total-sum
}
//console.log(find_missing_number([1,2,3,5]))


// find common element from two array 

let find_common = (arr1,arr2)=>{
    let common = arr1.filter(x=>arr2.includes(x))
    return common
}
//console.log(find_common([1,2,3,4,5],[2,4,5]))

//flat array element 

let flat_Array = [1,2,[25,[20,[95,85,99,[200,303,404]]]]]
//console.log(flat_Array.flat(Infinity))


//group by frequency

let group_By_Frequency = (arr)=>{
    let data=  new Map()
    arr.forEach((item)=>{
       data.set(item,(data.get(item)||0)+1) 

    })
    return data
}
//console.log(group_By_Frequency([1,2,2,3,3,3,]))

// find pair from array 
let find_pair = (arr,target)=>{
    let result = []
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                result.push([arr[i],arr[j]])
            }
        }
    }
    return result
}
//console.log(find_pair([1,2,3,4,5,6],7))


// second largest number from array from 
let second_largest = (arr)=>{
  // let max = Math.max(...arr)
  // let second_max = Math.max(...arr.filter(x=>x!=max))
  // return second_max
  // let max = -Infinity
  // let second_max = -Infinity
  // arr.forEach((item)=>{
  //   if(item>max){
  //     second_max = max;
  //     max = item
  //   }
  //   if(item!==max && item<second_max){
  //     second_max = item
  //   }
  // })
  // return second_max
  // let len = arr.length-2
  // let sort_arr = arr.sort((a,b)=>(a-b))
 
  // return sort_arr[len]


}
//console.log(second_largest([1,2,3,4,5,6,5,9,10,11]))
function countWords(sentence) {
  const words = sentence.trim().replace(/\s+/g, ' ').split(' ');

  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      
      if (!wordCounts[currentWord]) {
          wordCounts[currentWord] = 0;
      }

      if (i < words.length - 1) {
          const nextWord = words[i + 1];
          let currentWordEnd = sentence.indexOf(currentWord) + currentWord.length;
          let nextWordStart = sentence.indexOf(nextWord, currentWordEnd);
       
          let spaceCount = nextWordStart - currentWordEnd;
          
          wordCounts[currentWord] = spaceCount;
      } else {
          wordCounts[currentWord] = 0;
      }
  }

  return wordCounts;
}
// Example usage
 const name01 = "prince       soni  ramgarh"; 
 const result = countWords(name01);  
 console.log(result);

