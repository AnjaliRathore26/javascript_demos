 /*let promise = new Promise((resolve,reject)=>
 {
    setTimeout(()=>{
        console.log("I am a promise");
    },3000);
    resolve(true);
 })*/

 function mydisplayer(value)
 {
    console.log(value);
 }


 let p= new Promise((resolve,reject)=>
 {
    let x=1;

    if(x==1)
    {
        resolve("Ok");
    }
    else{
        reject("Error")
    }
 })

 p.then(
    function (value){mydisplayer(value);},
    function (error){mydisplayer(error);}
 );
