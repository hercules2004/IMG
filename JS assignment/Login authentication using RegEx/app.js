function myfun(){
const email=document.getElementById('email').value;
const pattern= /^\w+\.\w+@\w+\.\w+$/
const number=document.getElementById('number').value;
const numpattern=/^(\+91)?[6-9]\d{9}$/

const pwd=document.getElementById('pwd').value;
const cpwd=document.getElementById('cpwd').value;

if(pattern.test(email) && (pwd==cpwd) && numpattern.test(number)){
    var func = async() =>{
        document.getElementById('emailalert').innerHTML = "";
        document.getElementById('passwordalert').innerHTML = "";
        document.getElementById('numalert').innerHTML=" ";
    } 
    func().then(()=>{
    alert("You have been successfully registered");
   })
   
}
else if(!pattern.test(email)){
    document.getElementById('numalert').innerHTML=" ";
    document.getElementById('passwordalert').innerHTML = "";
    document.getElementById('emailalert').innerHTML="Please enter a valid email address";
}else if(pwd!=cpwd){
    document.getElementById('numalert').innerHTML=" ";
    document.getElementById('emailalert').innerHTML = "";
    document.getElementById('passwordalert').innerHTML="Please enter the same password";
}else{
    document.getElementById('passwordalert').innerHTML = "";
    document.getElementById('emailalert').innerHTML = "";
    document.getElementById('numalert').innerHTML="Please enter a valid Phone Number";
}

}
console.log("mesa happy");
document.getElementById("submit").addEventListener('click', (event)=>{
    event.preventDefault();
    myfun();
});