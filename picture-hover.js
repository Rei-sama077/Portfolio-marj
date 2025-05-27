
document.addEventListener('DOMContentLoaded', () => {
           
            const imageUrls = [
                'Assets/todo.png', 
                'https://placehold.co/600x400/EAB308/000000?text=Feature+Showcase',
                'https://placehold.co/600x400/34D399/FFFFFF?text=User+Interface',
                'https://placehold.co/600x400/F87171/FFFFFF?text=AI+Suggestions'
            ];

            // Alt texts corresponding to each image
             const imageAlts = [
                'Gearfolio Main Screenshot',
                'Gearfolio Feature Showcase',
                'Gearfolio User Interface Example',
                'Gearfolio AI Suggestions Feature'
            ];

            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                // Find the image within the .project-image-container-website
                const imageContainer = card.querySelector('.project-image-container-website');
                if (!imageContainer) {
                    console.warn('Project card does not have a .project-image-container-website element.');
                    return; 
                }

                const projectImage = imageContainer.querySelector('img');
                if (!projectImage) {
                    console.warn('No img tag found in .project-image-container-website.');
                    return;
                }

                let imageChangeInterval;
                let currentImageIndex = 0; // Start with the first image in the array
                const originalSrc = projectImage.src; // Store the original image source
                const originalAlt = projectImage.alt; // Store the original alt text

                card.addEventListener('mouseenter', () => {
                    // Start changing images
                    // Set the first image of the sequence immediately on hover if it's different
                    if (projectImage.src !== imageUrls[0]) {
                         projectImage.src = imageUrls[0];
                         projectImage.alt = imageAlts[0];
                         currentImageIndex = 0;
                    }

                    imageChangeInterval = setInterval(() => {
                        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
                        projectImage.src = imageUrls[currentImageIndex];
                        projectImage.alt = imageAlts[currentImageIndex];
                    }, 1000); // Change image every 1 second
                });

                card.addEventListener('mouseleave', () => {
                    // Stop changing images and reset to the original
                    clearInterval(imageChangeInterval);
                    projectImage.src = originalSrc;
                    projectImage.alt = originalAlt;
                    // Reset index to 0 so hover starts with the first image of the array next time
                    currentImageIndex = 0; 
                });
            });
        });