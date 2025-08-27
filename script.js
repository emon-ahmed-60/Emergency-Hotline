const heartIcons = document.getElementsByClassName('heart-icon');

for(const heartIcon of heartIcons){
    heartIcon.addEventListener("click",()=>{
       let heart = document.getElementById("heart").innerText;
       heart++;
       document.getElementById('heart').innerText = heart;
    })
}

