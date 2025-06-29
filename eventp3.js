var a = document.querySelector("#box")
var  b =document.querySelector("h1")
document.addEventListener("mousemove",function(dets){
a.style.left = dets.x + "px";
a.style.top = dets.y + "px";
a.style.transform ="translate(-50%,-50%)"
    
   
})