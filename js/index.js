let menuBtn = document.querySelector(".menuBtn")
let nav = document.querySelector('nav')

openNav=()=>{
  console.log(nav)
  nav.classList.toggle("hide");
  nav.classList.add("slide-bottom")
}
menuBtn.addEventListener("click", openNav)





