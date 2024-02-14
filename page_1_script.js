document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const xPos = Math.random() * window.innerWidth;
        heart.style.left = xPos + "px";

        const animationDuration = (Math.random() + 1) * 3; 
        heart.style.animation = `fall ${animationDuration}s linear infinite`;

        heartContainer.appendChild(heart);

        heart.addEventListener("animationend", function () {
            heart.remove();
        });
    }

    function createRandomHearts() {
        createHeart();
        setTimeout(createRandomHearts, Math.random() * 2000); 
    }

    createRandomHearts();
});
