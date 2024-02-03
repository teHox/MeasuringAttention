let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebar__arrow");
let container = document.querySelector(".container");

sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar_hide")
    sidebarBtn.classList.toggle("sidebar__arrow_hide")
    container.classList.toggle("container_active")
})