let btn = document.querySelector(".btnMenu");

console.log(btn);
btn.addEventListener("click", (e) => {
    let mainContent = document.querySelector(".mainContent");
    let menuConfigs = document.querySelector(".MenuConfigs");

    if (menuConfigs.classList.contains("openMenu")) {

        menuConfigs.classList.toggle("openMenu");
        menuConfigs.classList.toggle("CloseModal");
        setTimeout(function () {
            mainContent.classList.toggle("d-none");
            menuConfigs.classList.toggle("d-none");
        }, 300);


    } else {
        menuConfigs.classList.toggle("CloseModal");
        mainContent.classList.toggle("d-none");
        menuConfigs.classList.toggle("d-none");
        setTimeout(function () {
            menuConfigs.classList.toggle("openMenu");
        }, 20);
    }



})