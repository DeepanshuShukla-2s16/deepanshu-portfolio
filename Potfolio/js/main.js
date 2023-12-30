
// header scroll
let nav = document.querySelector(".navbar");
let imgaqua = document.querySelector(".img-aqua-logo");
let imgred = document.querySelector(".img-red-logo");
window.onscroll = function(){
    if(document.documentElement.scrollTop>18){
        nav.classList.add("header-scrolled");
        imgred.classList.add("d-none");
        imgaqua.classList.remove("d-none")
    }else{
        nav.classList.remove("header-scrolled");
        imgred.classList.remove("d-none");
        imgaqua.classList.add("d-none")   
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// for blink letter
var txt_arr = document.getElementById('blink').innerHTML;
document.getElementById('blink').innerHTML="";
var index = 0;
function typeText(){
    document.getElementById('blink').innerHTML =  document.getElementById('blink').innerHTML + txt_arr[index];
    if(index < txt_arr.length-1){
        index++;
        setTimeout("typeText()",150);
    }
    else if(index=== txt_arr.length-1){
        setTimeout("typeText()",2000);
        index++;
    }
    else{
        index =0;
        document.getElementById('blink').innerHTML="";
        setTimeout("typeText()",100);
    }
}


