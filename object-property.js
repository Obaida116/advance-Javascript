// finding array through Map
const students = [{id:45, name:'shohel'},
{id:37, name:'shabuj'},
{id:43, name:'shahadat'},
{id:49, name:'shams'}];

// const output = [];
// for(let i = 0; i < students.length; i++){
//     element = students[i];
//     findName = element.name;
//     result = output.push(findName)
// }

// console.log(output);
const names = students.map(s => s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter(s => s.id >40);
console.log(names, ids);
console.log(bigger);

