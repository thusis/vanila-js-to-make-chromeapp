const title = document.querySelector("div.text:first-child h1")

function handleMouseEnter(){
    title.innerText="The mouse is here!";
    title.style.color="blue";
}
function handleMouseLeave(){
    title.innerText="The mouse is gone!";
    title.style.color="tomato";
}
function handleWindowResize(){
    title.innerText="You just resized!";
    title.style.color="darkgreen";
}
function handleTitleClick(){
    title.innerText="That was a right click!";
    title.style.color="brown";
}


title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("resize",handleWindowResize);
title.addEventListener("click",handleTitleClick);
