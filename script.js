const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();

});

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card, .athlete-card');

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});