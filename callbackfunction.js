//callback function example
/*
function calculate(a, b, operation) {
    return operation(a, b);
}

const sum=(a,b)=> a+b;

const result=calculate(3,4,sum);

console.log("addition : "+ result);


const sub=(a,b)=> a-b;

const subresult=calculate(8,3,sub);
console.log("subtraction : "+subresult)

const mul=(a,b)=> a*b;

const mulresult=calculate(2,3,mul);
console.log("Multiplication : "+ mulresult)

//array callback function

//1. find method

const arr=[1,6,-3,-4,8,4,7,0,-2,3];

const findNeg=(item)=>{
    return item < 0;
};

const ans=arr.find(findNeg);
console.log("First negative : "+ ans);

//2.findIndex

const findPos=(num)=>{
    return num>0;
};
const ans2=arr.findIndex(findPos);
console.log("First Positive Index : "+ ans2);

//3.foreach

arr.forEach((num)=>{
    console.log("Square of number:"+ num**2);
})*/

//custom callback function 
//This is the way we handle the error //we can also throw the error
//setTimeOut function - it call the function after a no. of milliseconds

function getCheese(callback)
{
    setTimeout(()=>{
        const cheese="🧀";
        console.log("here is cheese",cheese);
        callback(cheese);
    },3000);
};

getCheese((cheese)=>{
    console.log("got the cheese",cheese);
});

//disadvantage of callback function is nested callbacks which are complex in readability and difficult to debug.
//That's why we use promises