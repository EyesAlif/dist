/* ---------------------------Intro---------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const text = "“Always New and Interesting Shawls Here...”";
    const typingTextElement = document.getElementById("typing-text");
    const introImg = document.getElementById("intro-img");

    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust speed here
        } else {
            setTimeout(() => {
                introImg.classList.remove("translate-y-20", "opacity-0");
                introImg.classList.add("translate-y-0", "opacity-100");
            }, 500); // Short delay before showing the image
        }
    }

    type();
});

/* ---------------------------Scroll_To_Top---------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove("opacity-0");
            scrollToTopBtn.classList.add("opacity-100");
        } else {
            scrollToTopBtn.classList.remove("opacity-100");
            scrollToTopBtn.classList.add("opacity-0");
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
