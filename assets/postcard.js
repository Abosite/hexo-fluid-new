const postcards = () => {
    let cards = document.querySelectorAll('.index-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.index-header').style.top = '0';
            card.querySelector('.index-excerpt a').style.display = 'inline';
        })
        card.addEventListener('mouseleave', () => {
            card.querySelector('.index-header').style.top = '12rem';
            card.querySelector('.index-excerpt a').style.display = 'none';
        })
    })
}

postcards();


VanillaTilt.init(document.querySelectorAll('.index-card'), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 1
})