/*

undersccore variable
_

gives us the result of last operation on in javascript


*/

//to read a file     - fs -> file system module to read text files
//fs module is a core library of node js so we neend install through npm/



// const fs = require('fs');
// const textin = fs.readFileSync(`${__dirname}/input.txt`,'utf-8');

// // to write our bakchodi in a file
// if(textin === 'launde ki behen'){
//     fs.writeFileSync(`${__dirname}/input.txt`, 'behen k laundey')
// }else{
//     fs.writeFileSync(`${__dirname}/input.txt`, 'launde ki behen')
// }
// console.log(textin);


//async node js

/*
synchronus coding leads to blocking of code, next line in not executed untill previous line is executed properly
asynchronus coding is opposite 
*/

//asynchronus file read

const fs = require('fs');
const text = fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data)=>{
    if(err){console.error(err)}else{
        fs.writeFile(`${__dirname}/input3.txt`, data, function(writeError){
            if(writeError){
                console.log('there are some error while writing the code to the file');
            }else{
                console.log('file writing succesfull')
            }
        })
        console.log(data);
    }})

    fs.writeFile(`${__dirname}/input2.txt`, 'launde ki behen', function(writeError){
        if(writeError){
            console.log('there are some error while writing the code to the file');
        }else{
            console.log('file writing succesfull')
        }
    })


    // we use asynchronus coding for event loop and synchronus for top level coding

    // node is single threaded    -->  code run from same part of memory
    /*
    Advantages of Single-Threaded Event Loop over Multi-Threaded Request/Response Stateless Model:

    1. Can handle more & more concurrent client’s requests with ease.
    2. Eliminates the need of creating more and more threads, because of the Event loop.
    3. Applications built on top of node.js use the least threads possible to reduce memory or resource usage.
*/       

// event loop -> JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

