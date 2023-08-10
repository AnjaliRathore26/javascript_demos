//objects which have state and behaviour. example car it has its own properties and methods
/*
const color={1:"Red",2:"Blue",3:"green",4:"black"};

console.log(color[1])
console.log(color[2])
console.log(color[3])

//array is a collection of elements
//array can hold more than one value
//arrays are object
//It does NOT define a constant array. It defines a constant reference to an array.

const col=["red","green","blue"]

//accessing the array

console.log(col[0])
console.log(col[2])

//accessing array using loop

for(let i=0;i<col.length;i++)
{
    console.log(col[i])
}

//converting an array to string

console.log(col.toString())

//adding an element to array

col.push("black");
col[4]="grey";

console.log(col)

//methods of array
//length
//toString
//pop
//push

console.log(col.pop())
col.push("white");
console.log(col)

//join
console.log(col.join("+"))

//shift
console.log(col.shift())

//unshift
console.log(col.unshift("voilet"))

col[0]="pink";
console.log(col)

//concat method use to join two methods
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
console.log(arr1.concat(arr2))

//flattening the array
const myarr=[8,4,7,0,3]
console.log(myarr.flat())

//sort
console.log(myarr.sort())

//reverse the array
console.log(myarr.reverse())


//itration in array
//1. foreach
//it is easier way to print the array

const arr=[6,4,3,0,3];
arr.forEach(element => {
    console.log(element)
});

let sum=0;
arr.forEach(element=>{
    sum=sum+element;
})
console.log(sum)

// for of loop

for (let i of arr)
{
    console.log(i)
}

//for in loop
//for in loop return the keys of the array
const arr=[6,4,3,0,3];
for( i in arr)
{
    console.log(i)
}


//array from 
//it convert any another type of data into array

let name="abhay";
let x=Array.from(name);
console.log(x)


//map in array
// map store the value in new array
const arr1=[78,43,24];
arr1.map((value,index)=>{
    console.log(value,index)
})

//filter method  in array
//filter use to filter the array with specific condition
//it also return a new array

const arr2=[89,65,34];
let x=arr2.filter((a)=>{
    return a<50;
})

console.log(x)
*/
//reduce method in array
//it reduce the array in one output

const arr3=[59,24,67];
let z=arr3.reduce((sum,a)=>
{
    return sum+a;
})
console.log(z)



