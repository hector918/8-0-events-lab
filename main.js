// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let current = document.querySelector("#current-color");
let palette = document.querySelector("#palette");
let canvas = document.querySelector("#canvas");
for(let x of palette.childNodes)
{
  if(typeof x==="object")
  {
    x.addEventListener("click",(evt)=>{
      current.setAttribute("style",evt.target.getAttribute("style"));
    })
  }
}
//////////////////////////////////
for(let x of canvas.childNodes){
  if(typeof x === "object")
    x.addEventListener("click",(evt)=>{
      evt.target.setAttribute("style",current.getAttribute("style"));
    })
}

//////extra
canvas.addEventListener('mousemove', e => {
  if(e.buttons===1)
  {
    let mouseOnEl = document.elementFromPoint(e.clientX, e.clientY);
    if(mouseOnEl.parentNode==canvas) mouseOnEl.setAttribute("style",current.getAttribute("style"));
  }
}, {passive: true})
