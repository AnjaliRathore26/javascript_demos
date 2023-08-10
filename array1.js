//1. sort the array
/*
const arr=[9,2,4,7,4];
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr)

//2.remove dulpicate from array
 const arr1=[1,2,2,7,8,4];

 function remove_duplicate(arr1)
 {
    return arr.filter((item,
        index) => arr.indexOf(item) === index)
 }

 console.log(arr1)


//3. remove the duplicates

const arr1=[1,2,2,7,8,4];

 function remove_duplicate(arr1)
 {
    let ans=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(ans.indexOf(arr1[i]) === -1)
        {
            ans.push(arr1[i]);
        }
    }
    return ans;
 }

 console.log(remove_duplicate(arr1))


 //4.union of two array
const a1=[7,4,3,2,1];
const a2=[4,7,0,9,2];
let a3=[];
for (let i=0;i<a1.length;i++)
{
    for(let j=0;j<a2.length;j++)
    {
        if(a1[i]==a2[j])
        {
            a3.push(a1[i]);
        }
    }
}
console.log(a3)

//5.find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
const arr=[10,20,10,40,50,60,70];
let t=90;
for(let i=0;i<arr.length;i++)
{
    if((arr[i]+arr[i+1])==t)
    {
        console.log(i)
        console.log(i+1)
    }
}

//6.convert the string into array

let str="Hello everyone";
let x=Array.from(str);
console.log(x)

//7. Create a new array using the map function whose each element is equal to the original element plus 4.
const arr=[8,3,5,2];
arr.map((x)=>{
    console.log(x+4)
})

//8. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let y=arr.filter((n)=>{
    return (n%2==0);
})
let z=y.map((a)=>{
    return a*2;
})
let ans=z.reduce((a,b)=>
{
    return a+b;
})

console.log(z)


//9.
const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
  ];

  let x=heros.map((hero,index)=>
  {
    return{id:index,heros:hero.name};
  });
  console.log(x)


//10.
const arr= ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let x=arr.filter((item)=>{
    return item.length>6;
});
console.log(x)

//11.Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.

//An array of odd numbers.
//An array of numbers divisible by 2 or 5.
//An array of numbers divisible by 3 and then squared those numbers.
//The sum of the following: square the numbers divisible by 5.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ans=num.filter((item)=>
{
    return item % 2!=0;

});
console.log(ans)

let ans2=num.filter((item)=>{
    return item%2==0 && item%5==0;
});

console.log(ans2);

let ans3=num.filter((item)=>
{
    return item%3;
})
console.log(ans3.map((item)=>
{
    return item**2;
}))

//12.JavaScript Program to Delete Middle Element from an Array

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n=num.length;
if(n%2==0)
{
   num.splice(n/2-1,2);
}
else{
    num.splice(n/2,1);
    
}

console.log(num);

//13. Write a JavaScript function that merges two arrays and removes all duplicate elements.
let num = [1, 2, 3, 4, 5];
let num1=[1,1,8,2,4];

let a=num.concat(num1);

let ans=[];
for(let i=0;i<a.length;i++)
{
    if(ans.indexOf(a[i])===-1)
    {
        ans.push(a[i]);
    }
}
console.log(ans);
*/
//14.Write a JavaScript function to get the nth largest element from an unsorted array.

let arr=[86,2,65,26,17,29,5,23];
arr.sort();
console.log(arr[0]);
