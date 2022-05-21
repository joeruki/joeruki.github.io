const content = "AI·SW교육 혁신 연구소"
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}
setInterval(typing, 300)