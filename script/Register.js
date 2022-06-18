

 // STORED all popup button
 document.querySelector(".close-btn").addEventListener("click",close_btn )
 const popup = document.querySelector(".popup")
 const main_popup = document.querySelector(".main-popup")


// STORED SIGNUP DATA in LOCAL STORAGE
let signupDATA_LS = JSON.parse(localStorage.getItem("details")) || [] ;
//  infoArr

// created function
document.querySelector("#form").addEventListener("submit",func)


let formtag = document.querySelector("#form")

function func(event){
event.preventDefault();

//    stored all values from input tag in variable
let name = formtag.name.value
let email = formtag.email.value
let  pass = formtag.password.value 
let mobile = formtag.mobile.value


if(name==="" || email ==="" || pass === "" || mobile === "" ){
 
/// if input is not filled or empty alert 
alert("Please Fill All Detais")

}else if(email == signupDATA_LS.email || mobile == signupDATA_LS.mobile ){

/// if email or pass already exsist 
alert("Email or Number Already Exsist")

}else{
 
 // open popup OTP window
   popup.style.display = "flex"
   main_popup.style.cssText = "animation:slide-in .5s ease ; animation-fill-mode: forwards;"
   
  /// stored value OTP from input     
      let stored_OTP = 12345; 
     let otpStored =  document.querySelector("#OTP")
     document.querySelector("#verify").addEventListener("click",checkOTP)

       // CHECK OTP from stored 
     function checkOTP(){

                  if( otpStored.value == stored_OTP ){
                    
                     let obj = {
                                "name":name,
                                "email":email,
                                "pass":pass,
                                "mobile":mobile
                                }

                        /// added to LOCALSTORAGE NAME ----- details
                        signupDATA_LS.push(obj)
                        localStorage.setItem("details",JSON.stringify(signupDATA_LS))
                        alert("Your Successfully Registered")
                        window.location.href="Login.html"
                                          
                  }else{
                     alert("OTP IS WRONG")
                  }

     }


                
}

}



// close popup window
function close_btn(){
  
    main_popup.style.cssText = "animation:slide-out .5s ease ; animation-fill-mode: forwards;"
    setTimeout( ()=>{
     popup.style.display = "none"

    }, 500 );// this 500 is a timeout for display none
 }

// close popup window   on touching  outside screen of popup page  
window.addEventListener("click", (el)=>{

if(el.target == document.querySelector(".popup-overlay")){

main_popup.style.cssText = "animation:slide-out .5s ease ; animation-fill-mode: forwards;"

setTimeout( ()=>{
 popup.style.display = "none"

}, 500 );// this 500 is a timeout for display none
}


});        


 