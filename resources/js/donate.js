const buttonOverview = document.getElementById('buttonOverview');
        const buttonImpact = document.getElementById('buttonImpact');
        const buttonWhatYouGet = document.getElementById('buttonWhatYouGet');

        // Add click event listeners to each button
        buttonOverview.addEventListener('click', () => {
            highlightButton(buttonOverview);
            resetButtonStyles([buttonImpact, buttonWhatYouGet]);
        });

        buttonImpact.addEventListener('click', () => {
            highlightButton(buttonImpact);
            resetButtonStyles([buttonOverview, buttonWhatYouGet]);
        });

        buttonWhatYouGet.addEventListener('click', () => {
            highlightButton(buttonWhatYouGet);
            resetButtonStyles([buttonOverview, buttonImpact]);
        });

        // Function to highlight the clicked button
        function highlightButton(button) {
            button.classList.add('highlighted');
        }

        // Function to reset the styles of other buttons
        function resetButtonStyles(buttons) {
            buttons.forEach(button => {
                button.classList.remove('highlighted');
            });
        }