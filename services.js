let flag = 0;

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}
slideshow(flag);
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    num = 0;
    flag = 0;
  }
  if (num < 0) {
    num = slides.length - 1;
    flag = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
let form = document.querySelector("form");
form.addEventListener("submit", getUsers);
let userArr = JSON.parse(localStorage.getItem("Data")) || [];
function getUsers(event) {
  event.preventDefault();
  let userObj = {
    name: form.name.value,
    mail: form.mail.value,
    mobile: form.mobile.value,
  };
  userArr.push(userObj);
  console.log(userObj);
  localStorage.setItem("Data", JSON.stringify(userArr));
}
