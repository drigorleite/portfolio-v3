/**
 * Projects Filter Functionality
 * Filters projects by category with smooth animations
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.grid-project-card, .case-study-card');

    // Add data-category to featured case study if not present
    const featuredCard = document.querySelector('.case-study-card');
    if (featuredCard && !featuredCard.dataset.category) {
        featuredCard.dataset.category = 'webapp';
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Show card
                    card.style.display = '';
                    card.classList.remove('project-card-hidden');
                    card.classList.add('project-card-visible');
                } else {
                    // Hide card
                    card.classList.add('project-card-hidden');
                    card.classList.remove('project-card-visible');
                    setTimeout(() => {
                        if (card.classList.contains('project-card-hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
});
