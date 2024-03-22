// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


// // function binarySearch(array,number){
// //     let start = 0
// //     let end = array.length
// //     let middle
// //     let found = false
// //     let position = -1
// //     while(found === false && start <= end){
// //         middle = Math.floor((start + end) /2)
// //         if(arr[middle] === number){
// //             found = true
// //             position = middle
// //             return position
// //         }
// //         if(number < array[middle]){
// //             end = middle - 1
// //         }else{
// //             start = middle + 1
// //         }
// //     }
// //     return position
// // }
// // console.log(binarySearch(arr,10)) //?.

// let massive = [0,56,45,34,23,12,345,564,7856,12342,-2345,-35,-3467]
// let counting = 0

// function selectionSort(array){
//     for (let i = 0; i < array.length; i++) {
//         let minIndex = i
//         for( let j = i+ 1; j < array.length;j++){
//             counting++
//             if(array[j] < array[minIndex]){
//                 minIndex = j
//             }
//         }
//         let tmp = array[i]
//         array[i] = array[minIndex]
//         array[minIndex] = tmp
//     }
//     return array
// }
// selectionSort(massive) //?.
// counting

// let counted = 0
// function bubbleSorting(array){
//     for(let i = 0;i<array.length; i++){
//         for(let j = 0;j< array.length;j++){
//             counted++
//             if(array[j+1] < array[j]){
//                 let tmp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = tmp
//             }
//         }
//     }
//     return array
// }

// bubbleSorting(massive) //?.
// counted

// let count = 0
// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }
//     let pivotIndex = Math.floor(array.length / 2)
//     let pivot = array[pivotIndex]
//     let less = []
//     let greate = []
//     for(let i = 0; i< array.length;i++){
//         count++
//         if(i === pivotIndex){
//             continue
//         }
//         if(array[i] < pivot){
//             less.push(array[i])
//         }else{
//             greate.push(array[i])
//         }
//     }
//     return [...quickSort(less),pivot,...quickSort(greate)]
// }
// quickSort(massive) //?.
// count

// function sumPairs(ints, s) {

//     // let ints = intes.sort((a,b) => a-b) 
//     let storage = []
//     let start = 0
//     let end = ints.length //?

//     // while(start < end){
//     //     if(ints[start] + ints[end] === s){
//     //         storage.push([ints[start],ints[end],]) //?
//     //     } 
//     //     if(ints[start] + ints[end] < s){
//     //         start++ 
//     //         console.log('sdf')
//     //     }else{
//     //         end--
//     //     }
//     // }
//     let map = new Map()
//     for(let i = 0;i < ints.length;i++){
//         let complement = s - ints[i]
//         if(map.has(complement)){
//             return [complement,ints[i]]
//         }else{

//         }
//         map.set(ints[i],i)
//     }

//     return undefined
//   }

// sumPairs([20, -13, 40],-7)  //?


// function sorting(items){
//     if(items.length <= 1){
//         return items
//     }
//     let pivotIndex = Math.floor(items.length / 2)
//     let pivot = items[pivotIndex]
//     let less = []
//     let greater = []
//     for(let i = 0;i < items.length;i++){
//         if(i === pivotIndex){
//             continue
//         }
//         if(pivot < items[i]){
//             greater.push(items[i])
//         }else{
//             less.push(items[i])
//         }
//     }
//     return [...sorting(less),pivot,...sorting(greater)]
// }
// sorting([4,3,26,7,5,4]) //?

// function deleteDuplicate(arr){
//     let hash = []
//     for(let i = 0;i<arr.length;i++){
//         if(hash.includes(arr[i])){
//             continue
//         }else{
//             hash.push(arr[i])
//         }
//     }
//     return hash.sort((a,b) => a-b)
// }
// deleteDuplicate([11,2,33,4,5,6,7,7,7,8,8,8,2,2,23,3,3,3]) //?


