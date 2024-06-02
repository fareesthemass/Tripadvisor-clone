var overlay=document.querySelector(".sidebaroverlay")
var sidenavbar=document.querySelector(".sidenavbar800px")
var menutaggle=document.querySelector(".menutaggle")
var profiletaggle=document.querySelector(".profiletaggle")
var cancelbtn=document.querySelector(".sidenavbar800px__cancelbutton")
var body=document.querySelector("body")


// display at 800px
menutaggle.addEventListener("click", function(){
    sidenavbar.style.left='0'
    overlay.style.display="block"
    body.style.overflow='hidden'
})

cancelbtn.addEventListener('click',function(){
    sidenavbar.style.left='-150%'
    overlay.style.display='none'
    body.style.overflow='auto'
})


// display at 600px
profiletaggle.addEventListener("click", function(){
    sidenavbar.style.left='0'
    overlay.style.display="block"
    body.style.overflow='hidden'
})

cancelbtn.addEventListener('click',function(){
    sidenavbar.style.left='-150%'
    overlay.style.display='none'
    body.style.overflow='auto'
})

