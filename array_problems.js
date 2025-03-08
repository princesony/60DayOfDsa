// sum of two elemnt 

let sum_two = (a,b)=>{
    if(typeof(a) !=="number" || typeof(b)!=="number" ){
        return "Invalid input"
    }
   
    return a + b
}

// check case 
// console.log(sum_two(5,7)) // 12
// console.log(sum_two(5,"7")) // Invalid input


//find minmun from array 
let array_data = [50,4,9,1]
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
let max = (arr)=>{
    if(arr.length<=1){
        return arr[0]
    }
    let max = arr[0]
    for(let i= 0;i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
//console.log(max(array_data))



// write funtion that return reverse string but dont use reverse method using reverse method 


let name = "prince kumar soni"

let reverse_string = (data)=>{
    let result = []
    for(let i = data.length -1 ; i >= 0 ; i--){
        result.push(data[i])
    }
    return result.join('')
}
console.log(reverse_string(name))


