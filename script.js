function active_link(tab_link) {
  const tabsContents = document.getElementsByClassName("tab-content");
 

  for (let tabContent of tabsContents) {
    tabContent.classList.remove("activeLink");
  }

  document.getElementById(tab_link).classList.add("activeLink");
}



const profile = document.querySelector(".profile")
const profileText = document.querySelector(".profile-span")



profile.addEventListener("mouseenter", function(){
 profileText.classList.remove("profileText")
  
})

profile.addEventListener("mouseleave",function(){
 profileText.classList.add("profileText")
  
})