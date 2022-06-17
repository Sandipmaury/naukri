let imgArray=[
"https://img.naukri.com/careernavigatorCompImages/logos/10591.gif",
"https://img.naukri.com/careernavigatorCompImages/logos/11049.gif" ,
"https://img.naukri.com/careernavigatorCompImages/logos/4102.gif" ,
"https://img.naukri.com/careernavigatorCompImages/logos/24812.gif" ,
"https://img.naukri.com/careernavigatorCompImages/logos/10310.gif" ,
"https://img.naukri.com/careernavigatorCompImages/logos/2567.gif"
  ]

  slider()

  function slider()
  {
    let bag=""
    let i=0;
    let slide=document.getElementById("images")
    let image1=document.createElement("img")
    let image2=document.createElement("img")
    let image3=document.createElement("img")
    let image4=document.createElement("img")
    let image5=document.createElement("img")
    setInterval(function(){
     
     
      console.log("hi")
      image1.src=imgArray[i]
      image2.src=imgArray[i+1]
      image3.src=imgArray[i+2]
      image4.src=imgArray[i+3]
      image5.src=imgArray[i+4]
      if(i==0)
      {
        i=1
      }
      else{
        i=0
      }
      slide.append(image1,image2,image3,image4,image5)
      
    },2000)
  }