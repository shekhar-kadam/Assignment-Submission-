// What is the value of clothes[0] and why?
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

//output is "jacket" because the length of the start from 0

// Write a Javascript program to find the sum of all elements of a given array?

let array = [2, 3,4,5,7,8]
let sum = 0;
for(let i = 0; i < array.length; i++) {
    sum = sum + array[i]
}

console.log(sum)