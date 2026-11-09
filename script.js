

let D = Number (prompt("Enter your Day From 1 To 7."));

switch(D){
    case 1:
        console.log("Saturday");
        break
    case 2:
        console.log("Sunday");
        break
    case 3:
        console.log("Monday");
        break
    case 4:
        console.log("Tueseday");
        brea
    case 5:
        console.log("Wednsday");
        break
    case 6:
        console.log("Thursday");
        break
    case 7:
        console.log("Friday");
        break

    default:
        console.log("Invalid Day.");
}


let Name= prompt("Enter Your Name.");
let age= Number(prompt("Enter Your Age."));
let grade= Number(prompt("Enter Your Grade."));
let mark= Number(prompt("Enter Your Marks Out of 100"));

console.log(Name);
console.log(age);
let afage= age
console.log(afage+=5);
let remark= mark-100;
console.log(afage);

console.log(remark);

if (age<18){
        console.log("Under 18");
}
else{
        console.log("18 Or Older than");     
}

let sta= mark;

if(sta>=50){
    sta = "Passed";
}
else {
    sta = "[Failed]";
}
    
let per= mark;    
if (per>=90 && per<=100){
    per= "Excellent";
}
else if (per>=75 && per<=89) {
    per= "Very Good"
}
else if (per>=50 && per<=74) {
    per= "Good";
;
}
else {
    per= "Failed";
}


let cha= age; 
let chm= mark;
if (cha>=18)
    if (chm>=50){
    chm="Passed";
}
else {
    chm= "Failed";
}

console.log(`Student Name: ${Name}
            Age: ${age} 
            Age after 5 years: ${afage}
            Marks: ${mark}
            Remaining Marks: ${remark}
            Status: ${sta}
            Performance: ${per} `);

let type= Number(window.prompt("Choose Number from 1 to 3 Representing a Student"));
switch(type){
    case 1:
        console.log("Regular Student");
        break
    case 2:
        console.log("ITI Student");
        break
    case 3:
        console.log("University Student");
        break
    default:
        console.log("Invalid Student Type");
        
}
