(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".activate").classList.remove("activate");
            this.classList.add("activate");
            document.querySelector(".act").classList.remove("act");
            document.getElementById(button.dataset.id).classList.add("act");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();