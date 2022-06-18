let imgArray = [
  "https://img.naukri.com/careernavigatorCompImages/logos/10591.gif",
  "https://img.naukri.com/careernavigatorCompImages/logos/11049.gif",
  "https://img.naukri.com/careernavigatorCompImages/logos/4102.gif",
  "https://img.naukri.com/careernavigatorCompImages/logos/24812.gif",
  "https://img.naukri.com/careernavigatorCompImages/logos/10310.gif",
  "https://img.naukri.com/careernavigatorCompImages/logos/2567.gif",
];

slider();

function slider() {
  let bag = "";
  let i = 0;
  let slide = document.getElementById("images");
  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");
  let image5 = document.createElement("img");
  setInterval(function () {
    console.log("hi");
    image1.src = imgArray[i];
    image2.src = imgArray[i + 1];
    image3.src = imgArray[i + 2];
    image4.src = imgArray[i + 3];
    image5.src = imgArray[i + 4];
    if (i == 0) {
      i = 1;
    } else {
      i = 0;
    }
    slide.append(image1, image2, image3, image4, image5);
  }, 2000);
}

function followBtn1()
{
  let btn= document.querySelector("#btn1");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut1()
{
  let btn= document.querySelector("#btn1");
  btn.style.backgroundColor= "white";
}


function followBtn2()
{
  let btn= document.querySelector("#btn2");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut2()
{
  let btn= document.querySelector("#btn2");
  btn.style.backgroundColor= "white";
}

function followBtn3()
{
  let btn= document.querySelector("#btn3");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut3()
{
  let btn= document.querySelector("#btn3");
  btn.style.backgroundColor= "white";
}


function followBtn4()
{
  let btn= document.querySelector("#btn4");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut4()
{
  let btn= document.querySelector("#btn4");
  btn.style.backgroundColor= "white";
}

function followBtn5()
{
  let btn= document.querySelector("#btn5");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut5()
{
  let btn= document.querySelector("#btn5");
  btn.style.backgroundColor= "white";
}


function followBtn6()
{
  let btn= document.querySelector("#btn6");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnOut6()
{
  let btn= document.querySelector("#btn6");
  btn.style.backgroundColor= "white";
}

function followB1()
{
  let btn= document.querySelector("#b1");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO1()
{
  let btn= document.querySelector("#b1");
  btn.style.backgroundColor= "white";
}

function followB2()
{
  let btn= document.querySelector("#b2");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO2()
{
  let btn= document.querySelector("#b2");
  btn.style.backgroundColor= "white";
}

function followB3()
{
  let btn= document.querySelector("#b3");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO3()
{
  let btn= document.querySelector("#b3");
  btn.style.backgroundColor= "white";
}

function followB4()
{
  let btn= document.querySelector("#b4");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO4()
{
  let btn= document.querySelector("#b4");
  btn.style.backgroundColor= "white";
}

function followB5()
{
  let btn= document.querySelector("#b5");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO5()
{
  let btn= document.querySelector("#b5");
  btn.style.backgroundColor= "white";
}

function followB6()
{
  let btn= document.querySelector("#b6");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO6()
{
  let btn= document.querySelector("#b6");
  btn.style.backgroundColor= "white";
}

function followB7()
{
  let btn= document.querySelector("#b7");
  btn.style.backgroundColor= "#52BE80";
}
function followBtnO7()
{
  let btn= document.querySelector("#b7");
  btn.style.backgroundColor= "white";
}