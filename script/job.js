let flag = 0;
function controller(x){
    flag = flag + x;
    slidShow(flag);
}
slidShow(flag)
function slidShow(num){
    let slides = document.getElementsByClassName("slid");

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num<0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}



let profileArray=JSON.parse(localStorage.getItem("details"))


let Name=document.querySelector("#name")
 Name.innerText=profileArray[0].name;

let Email=document.querySelector("#Email")
Email.innerText=profileArray[0].email;

let out=document.querySelector("#logOut")
out.addEventListener("click",()=>{
 
  window.localStorage.removeItem('logdetails');
  
  window.location.href="index.html"
})