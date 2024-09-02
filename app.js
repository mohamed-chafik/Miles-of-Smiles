// vertical nav bar
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth' // This adds a smooth scrolling effect
})};

document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`.${entry.target.id}-`)
                document.getElementById(`${entry.target.id}-`).checked = true;       
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


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


