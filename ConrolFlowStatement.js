let isLoggedIn =true

let role ="user"

let isBanned=false

if(isLoggedIn != true){
 console.log("Please Login");
} else if(isBanned){
    console.log("Access denied");
}else if(role == "admin"){
    console.log("Full access");    
}else if(role =="user"){
    console.log("Limited access");
}
else if(role == "guest"){
    console.log("Read only");
    
}