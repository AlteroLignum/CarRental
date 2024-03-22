




// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have
// five or more letters reversed (Just like the name of this Kata). Strings passed in will consist
// of only letters and spaces. Spaces will be included only when more than one word is present.







// function spinWords(words: string): string {
//   let splitString = words.split(' ')
//   let newString:string = ''
//   splitString.forEach((word) =>{
//     if(word.length >= 5){
//         newString += word.split('').reverse().join('') + ' '
//     }else{
//         newString += word + ' '
//     }
//   })
//   return newString.trim()
// }

// spinWords('My neighbor likes me') //?



function sumPairs(ints: number[], s: number): [number, number] | void {  
    let storage: [number,number] = [0,0]
    let start:number = 0
    let end:number = ints.length
    while(start < end){
        if(ints[start] + ints[end] === s){
            storage.push(ints[start],ints[end])
        } else if(ints[start] + ints[end] < s){
            start++
        }else{
            end--
        }
    }


    return storage // your code here...
  }


sumPairs([4, 3, 2, 3, 4],6) //?














