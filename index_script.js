document.addEventListener("DOMContentLoaded", function () {
    const noContainer = document.getElementById("no-container");

    noContainer.addEventListener("mouseenter", function () {
        // Set the "no" in a random position within the container
        const xPos = Math.random() * (window.innerWidth - 50); // Adjust 50 based on the width of your "no" element
        const yPos = Math.random() * (window.innerHeight - 20); // Adjust 20 based on the height of your "no" element

        noContainer.style.left = xPos + "px";
        noContainer.style.top = yPos + "px";
    });
});
