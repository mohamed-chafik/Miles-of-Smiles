var modal = document.getElementById("successModal");
var submitBtn = document.querySelector(".fancy");
var closeBtn = document.getElementById("closeModalButton");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
