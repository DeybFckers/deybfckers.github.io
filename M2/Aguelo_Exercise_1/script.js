
        // Select the button and header elements
        const button = document.getElementById('changeTextBtn');
        const header = document.getElementById('header');

        // Add an event listener to the button
        button.addEventListener('click', function() {
            header.textContent = 'Text Changed!';
        });