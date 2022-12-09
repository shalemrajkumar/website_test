(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".activate").classList.remove("activate");
            this.classList.add("activate");
            document.querySelector(".act").classList.remove("act");
            document.getElementById(button.dataset.id).classList.add("act");
        })
    });
    document.querySelector(".theme").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
    })
})();
function change (icon){
if(document.getElementById(icon).className="fa-regular fa-moon"){
            document.getElementById(icon).className="fa-solid fa-sun";
        }
        else{
            document.getElementById(icon).className="fa-regular fa-moon";
        }}