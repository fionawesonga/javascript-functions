//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function stringsArray(strArray){
    let newArray=strArray.map(str=>str.length);
    return newArray;
}
console.log(stringsArray(["dog","cat","cat"]));

//Given an array of numbers, write a function that filters out and returns only the even numbers.
function evenNumbers(numbers){
    let filteredNumbers=numbers.filter(item=>item%2===0);
    return filteredNumbers;
}
console.log(evenNumbers([1,2,3,4,5,6]));

//Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function getTopStudent(student){
    let filteredData=student.filter(student=>student.score>75)
                     .map(student=>student.name);
                     return filteredData;

}
console.log(getTopStudent([{name:"Fiona", score: 60},{name:"Jabal", score:80}]));
//Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function numberArray(arr){
    let newArray=arr.map(arr=>arr**2);
    return newArray;
}
console.log(numberArray([3,4,6,2]));

//Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function getNumbers(newArray){
    let stringType=newArray.filter(item=>typeof item ==="String".map(str.toUpperCase()));
    return stringType;

}
console.log(getNumbers("car",20,null));
