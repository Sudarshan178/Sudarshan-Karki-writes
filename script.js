document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hash !== '') {
                e.preventDefault();
                
                const hash = link.hash;
                
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dropdown animation
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const parent = dropdown.parentElement;

        parent.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
            setTimeout(() => {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
            }, 10);
        });

        parent.addEventListener('mouseleave', () => {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 300);
        });
    });
});
