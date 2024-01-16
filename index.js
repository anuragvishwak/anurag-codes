function toggleCard(index) {
    const cards = document.querySelectorAll('.card');
    
    // Remove 'active' class from all cards
    cards.forEach(card => card.classList.remove('active'));

    // Add 'active' class to the clicked card
    cards[index].classList.add('active');
}