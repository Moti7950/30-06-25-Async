import { rejects } from "node:assert"
import { log } from "node:console";
import {readdir, readFile, stat} from "node:fs"
import { resolve } from "node:path"

//=========1========
// let pathFile ="./file.txt";
// new Promise((resolve,rejects) => {
//     readFile(pathFile,"utf8",(err,data)=>{
//         (data)? resolve(data) :rejects(err)
//     })
// })
// .then(data => console.log("File Content:",data))
// .then(data=> stat(pathFile,(err,data)=>{
//    if (err)  rejects(err)
//     console.log("Created At:",new Date(data.birthtimeMs).toDateString()); 
//     console.log("Size:",data.size, "bytes");
// }))
// .catch(()=> console.log(err))

//=========2========

// readdir(process.cwd(), "utf8",(err,data)=>
// {   if (err) return err;
//     data.forEach(file =>
//     {
//         if (file.includes('.')) console.log(file);
//     })
// })

//=========3========
// function fn(num)
// {
//     if (num===-1) return console.log("Time's up!"); 
//     setTimeout(()=>{
//         console.log(num);
//         fn(num-1);
//     },1000)
// }
// fn(5)

//=========4========
let pathFile ="./file.txt";
new Promise((resolve,rejects) => {
    readFile(pathFile,"utf8",(err,data)=>{
        (data)? resolve(data) :rejects(err)
    })
})
.then(data => console.log("File Content:",data))
