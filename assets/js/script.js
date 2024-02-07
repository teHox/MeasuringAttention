let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebar__arrow");
let container = document.querySelector(".container");

sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar_active")
    sidebarBtn.classList.toggle("sidebar__arrow_active")
    container.classList.toggle("container_active")
})

let tab_btn_1 = document.querySelector("#btn_tab_1");
let tab_btn_2 = document.querySelector("#btn_tab_2");
let tab_btn_3 = document.querySelector("#btn_tab_3");

let tab_1 = document.querySelector("#tab_1");
let tab_2 = document.querySelector("#tab_2");
let tab_3 = document.querySelector("#tab_3");

tab_btn_1.addEventListener("click", ()=>{
    tab_btn_1.classList.add("header__tab_active");
    tab_btn_2.classList.remove("header__tab_active");
    tab_btn_3.classList.remove("header__tab_active");
    tab_1.classList.add("tabs__item_active");
    tab_2.classList.remove("tabs__item_active");
    tab_3.classList.remove("tabs__item_active");
})

tab_btn_2.addEventListener("click", ()=>{
    tab_btn_2.classList.add("header__tab_active");
    tab_btn_1.classList.remove("header__tab_active");
    tab_btn_3.classList.remove("header__tab_active");
    tab_2.classList.add("tabs__item_active");
    tab_1.classList.remove("tabs__item_active");
    tab_3.classList.remove("tabs__item_active");
})

tab_btn_3.addEventListener("click", ()=>{
    tab_btn_3.classList.add("header__tab_active");
    tab_btn_1.classList.remove("header__tab_active");
    tab_btn_2.classList.remove("header__tab_active");
    tab_3.classList.add("tabs__item_active");
    tab_1.classList.remove("tabs__item_active");
    tab_2.classList.remove("tabs__item_active");
})

