//your JS code here. If required.
let p=document.getElementById("status")
let button=document.getElementById("enterBtn")

button.addEventListener("click",function clicked(){
  p.innerHTML = "";
    
    let h1 = document.createElement("h1");
    h1.innerText = "Entered Metaverse";
    
    p.appendChild(h1);
})