/**
 * Project carousels
 */
function initCarousels() {
    const carousels = document.querySelectorAll('.project-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const nextButton = carousel.querySelector('.carousel-btn.next');
        const prevButton = carousel.querySelector('.carousel-btn.prev');
        const dots = Array.from(carousel.querySelectorAll('.dot'));

        if (!track || slides.length === 0) return;

        let currentIndex = 0;

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[index]) dots[index].classList.add('active');
            currentIndex = index;
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                let index = currentIndex + 1;
                if (index >= slides.length) index = 0;
                updateCarousel(index);
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                let index = currentIndex - 1;
                if (index < 0) index = slides.length - 1;
                updateCarousel(index);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });
    });
}
