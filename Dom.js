let fname=document.createElement("input");
fname.setAttribute("id","fname");
fname.setAttribute("type","text");

let mname=document.createElement("input");
mname.setAttribute("id","mname");
mname.setAttribute("type","text");

let lname=document.createElement("input");
lname.setAttribute("id","lname");
lname.setAttribute("type","text");

let p=document.createElement("p");


let btn=document.createElement("button");

btn.setAttribute("id","btnReadValue");
btn.textContent="ReadMe";


btn.addEventListener("click",()=>{
    let fname=document.getElementById("fname");
    let lname1=document.getElementById("mname");
    let lname=document.getElementById("lname");
    if(!fname.value || !mname.value||!lname.value){
       
        p.innerText="text box should not be empty.";
    }
    else{
        
        p.innerText=`this is the textbox value ${fname.value} ${mname.value} ${lname.value}`;
    }
});
document.body.appendChild(fname);
document.body.appendChild(mname);
document.body.appendChild(lname);
document.body.appendChild(btn);
document.body.appendChild(p);
