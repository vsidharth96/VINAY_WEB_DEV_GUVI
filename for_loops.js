var object=[
    {person:"Mohan",age:25,company:"Guvi"},
    {person:"Rohan",age:26,company:"Guvi Geeks"},
    {person:"Ron",age:28,company:"Guvi Geeks Network"},
];

console.log("This will be for loop")

for(let i=0;i<object.length;i++){
    console.log(`
    Name:${object[i].person}
    Age:${object[i].age}
    company:${object[i].company}`)
};

console.log("\n This will be for in loop")

for(let i in object){
    console.log(`
    Name:${object[i].person}
    Age:${object[i].age}
    Company:${object[i].company}`)
};

console.log("\n This will be for Each loop")

object.forEach((item)=>
    console.log(`
    Name:${item.person}
    Age:${item.age}
    Company:${item.company}
    `)    
)
console.log("\n This will be for In loop")

for (let index in object){
        console.log(`
        Name:${object[index].person}
        Age:${object[index].age}
        City:${object[index].company}
        `);
    };
