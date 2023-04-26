
document.title = "Counter App";

const count = document.getElementById("count");
const err = document.getElementById("err");
 
err.style.color = "red";
let counter = 0;

const increment = () =>{

if(counter < 10) {
    counter += 1;
    count.textContent = counter;
    count.style.color = "black";


}
else{
    counter = 10;
    count.style.color = "red";
    err.style.color = "red";
    err.textContent ="Counter cannot be greater than 10";
      
}

}
const decrement = () =>{
if (counter > 0) {
    counter -= 1;
    count.textContent = counter;
    err.style.color = "red";
    err.textContent ="Counter cannot be lesser than 0";

}
else{
    counter = 10;
      
}
    
}