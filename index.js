


const MI = document.getElementById("mi");
const SAMSUNG = document.getElementById("samsung");
const IPHONES = document.getElementById("iphones");
const HTC = document.getElementById("htc");


const get = document.querySelectorAll(".category");
console.log(get);
get[0].addEventListener("click", function(){
    console.log(this.innerHTML);
    HTC.style.display="inline-block";
    SAMSUNG.style.display="none";
    MI.style.display="none";
    IPHONES.style.display="none";
})
get[1].addEventListener("click", function(){
   console.log(this.innerHTML);
   HTC.style.display="none";
   SAMSUNG.style.display="inline-block";
   MI.style.display="none";
   IPHONES.style.display="none";
})



get[2].addEventListener("click", function(){
    console.log(this.innerHTML);
    
    MI.style.display="inline-block";
    IPHONES.style.display="none";
    HTC.style.display = "none";
    SAMSUNG.style.display="none";
})
get[3].addEventListener("click", function(){
   console.log(this.innerHTML);

    MI.style.display="none";
    IPHONES.style.display="inline-block";
    HTC.style.display = "none";
    SAMSUNG.style.display="none";
})
