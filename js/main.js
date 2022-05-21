let target=document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); 


const content = "모두\n건강한\n한 해\n보내세요!";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)