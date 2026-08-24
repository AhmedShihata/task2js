

// let D = Number (prompt("Enter your Day From 1 To 7."));

// switch(D){
//     case 1:
//         console.log("Saturday");
//         break
//     case 2:
//         console.log("Sunday");
//         break
//     case 3:
//         console.log("Monday");
//         break
//     case 4:
//         console.log("Tueseday");
//         brea
//     case 5:
//         console.log("Wednsday");
//         break
//     case 6:
//         console.log("Thursday");
//         break
//     case 7:
//         console.log("Friday");
//         break

//     default:
//         console.log("Invalid Day.");
// }


let Name= prompt("Enter Your Name.");
let age= Number(prompt("Enter Your Age."));
let grade= Number(prompt("Enter Your Grade."));
let mark= Number(prompt("Enter Your Marks Out of 100"));

console.log(Name);
let afage= age
console.log(afage+=5);
let remark= mark;

console.log(remark-100);
console.log(age)

if (age>18){
        console.log("Under 18");
}
else{
        console.log("18 Or Older than");     
}

let sta= mark;
if(sta>=50){
    console.log("Passed");
}
else {
    console.log("Failed");   
}

let per= mark;    
if (per>=90 && per<=100){
    console.log("Excellent");   
}
else if (per>=75 && per<=89) {
    console.log("Very Good");
}
else if (per>=50 && per<=74) {
    console.log("Good");
}
else {
    console.log("Fail");    
}

let cha= age; 
let chm= mark;
if (cha>=18)
    if (chm>=50){
    console.log("Passed");
}
else {
    console.log("Failed");
}

const mas= '--- Student Information --- Student Name: ${Name} Age: ${age} Age after 5 years: ${afage} Marks: ${mark} Remaining Marks: ${remark} Status: ${sta} Performance: ${per} '.trim();
console.log(mas);