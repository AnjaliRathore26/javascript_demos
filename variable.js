/*console.log('hello world')

let x="hello world";
console.log(x)

var y=10;
var y="anjali";
console.log(y)

//function in javascript

function sum()
{
    a=10;
    b=20;
    return a+b;
}

let z=sum();
console.log(z)

//area of circle

let r=10;
const pi=3.14;
function area(r)
{
    return pi*r*r;
}

let a=area(r);
console.log(a);

//even or odd

let n=4;
function evenodd(n)
{
    if(n%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let x=evenodd(n);
console.log(x)

//leap year or not

let year=2024;

function leapyear(year)
{
    if(year%4==0)
    {
        return true;
    }
    else{
        return false;
    }
}

let y=leapyear(year);
console.log(y)

//prime number

let n=4;

function primeNum(n)
{
    flag=0;
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            flag=1;
            break;
        }
    }
    return flag;
}

let x=primeNum(n);
if(x==0)
{
    console.log('It is prime number')
}
else{
    console.log('It is not a prime number')
}

//reverse a number

let n=456;

function reversenum(n)
{
    let rem=0;
    let rev=0;
    while(n>0)
    {
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }

    return rev;
}

let z=reversenum(n);
console.log(z)

//armstrong number

let n=371;
function armstrong(n)
{
    let temp=n;
    let sum=0;
    let rem=0;
    while(n>0)
    {
        rem=n%10;
        sum= sum +(rem**3);
        n=Math.floor(n/10);
    }

    if(temp==sum)
    {
        console.log('it is an armstrong number');
    }
    else{
        console.log('It is not an armstrong number');
    }
}

armstrong(n);


//palindrome

let n=353;

function palindrom(n)
{
    let temp=n;
    let rem=0;
    let rev=0;
    while(n>0)
    {
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }

    if(temp==rev)
    {
        console.log('it is palindrome');
    }
    else{
        console.log('It is not palindrome');
    }
}

palindrom(n);

//largest among two element


let x=5;
let y=7;

function greater(x,y)
{
    if(x>y)
    {
        console.log('x is greater')
    }
    else{
        console.log('y is greater')
    }
}

greater(x,y);*/

//sum 3 and 5 multiples under 1000.

function multiple()
{
    let sum=0;
    for(let i=0;i<1000;i++)
    {
        if(i%3 && i%5)
        {
            sum=sum+i;
        }
    }

    console.log(sum)
}

multiple();





