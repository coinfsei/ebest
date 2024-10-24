document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const fullImage = document.querySelector(".full-image img");
    const closeButton = document.querySelector(".full-image");

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < thumbnails.length) {
            fullImage.src = thumbnails[index].src.replace("-thumb", "");
            fullImage.alt = thumbnails[index].alt;
            currentIndex = index;
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showImage(index);
            fullImage.parentElement.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", (event) => {
        if (event.target === closeButton) {
            fullImage.parentElement.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (fullImage.parentElement.style.display === "flex") {
            if (event.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (event.key === "ArrowRight") {
                showImage(currentIndex + 1);
            } else if (event.key === "Escape") {
                fullImage.parentElement.style.display = "none";
            }
        }
    });
});