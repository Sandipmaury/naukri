const banner = document.querySelector("#banner");
const search_input = document.querySelector("#search");
const search_location = document.querySelector("#search-location");
const close = document.querySelector("#close");
const search_bar = document.querySelector(".searchBar");
search_input.addEventListener("click", () => {
  search_bar.style.width = "120%";
  search_input.style.width = "50%";
  search_bar.style.position = "relative";
  search_location.style.visibility = "visible";
  search_location.style.width = "50%";
  banner.setAttribute("class", "banner-black");
  close.style.visibility = "visible";
});
close.addEventListener("click", () => {
  banner.setAttribute("class", "");
  close.style.visibility = "hidden";
  search_location.style.visibility = "hidden";
  search_location.style.width = "";
  search_bar.style.width = "100%";
  search_input.style.width = "80%";
  search_bar.style.position = "";
});


let profileArray=JSON.parse(localStorage.getItem("details"))
console.log(profileArray)

let Name=document.querySelector("#name")
 Name.innerText=profileArray[0].name;

let Email=document.querySelector("#Email")
Email.innerText=profileArray[0].email;

