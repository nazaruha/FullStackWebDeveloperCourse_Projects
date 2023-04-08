//jshint esversion: 6


// HOW TO WORK WITH FILE SYSTEM
// const fs = require("fs");  // that's how we use smth from nodejs
// fs.copyFileSync("file1.txt", "file2.txt") // copy content from the firt file to the second file (replaces all the content from in the second file)

// WE INSTALLED FROM THE PACKAGE 'superheroes' FROM THE npmjs.com
const sh = require("superheroes");
const sv = require("supervillains");
console.log(`${sh.random()} vs ${sv.random()}`);