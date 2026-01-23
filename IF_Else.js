
// let age=114
// if(age>=18&&age<=50){
//     console.log("Your an adult")
// }
// else if(age>50){
//     console.log("Your an senior citizen"+age)
    
// }else{
//     console.log("Underage");
    
// }
let name="s"
let namel='s'
let s=(namel=='s')? "correct" : "incorrect";
console.log(s);

const id=Symbol('123')
console.log(id)

console.log(s==='s');
// console.log(s)id



const heros=["Ayan","Samar","danish"]
console.table(heros)


const BatchDetails={name:'samar',
    age:181,
    sex:'Male'
}

console.log(typeof BatchDetails)

s="hioi"
console.log(s.__proto__);

let n=new Date("2023-01-25")
console.log(n.toLocaleString());


n.toLocaleString('default',{
    weekday:'long'
  
})
console.log(n)