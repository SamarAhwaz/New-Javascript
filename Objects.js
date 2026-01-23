

let sym=Symbol("Key1")
const Object1={
    [sym]:"Key2",
    name:"Samar",
    age:19,
    Location:"bhopal",
    number:977020691
}


let obj=new Object()
obj.name="Sa"
console.log(obj);


let nested={
    Role:"Developer",
    Information:{
        Name:"samar",
        age:"",
        Location:"samar",
        email:"Samarahwaz04@gmail.com"

    }
,
    Role1:"User",
    infor:{
         Name:"samar",
        age:"",
        Location:"samar",
        email:"Samarahwaz04@gmail.com"
    }
}
console.log(nested.Information,nested.infor);
// console.log(typeof Object.sym);



// destructure of object

const name={Name: "samar",
    class:11
    ,age:18,
    location:"Bhopal",
    number:977020691
}


let {location:n}=name
console.log(n);
