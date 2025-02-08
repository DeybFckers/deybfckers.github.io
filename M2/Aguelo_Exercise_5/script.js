const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');
const socialButtonsContainer = document.createElement('div');
socialButtonsContainer.id = 'socialButtons';
document.body.appendChild(socialButtonsContainer);

// Function to fetch a random quote
function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;

            // Create share and copy buttons after fetching a new quote
            createSocialMediaButtons(randomQuote);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

// Function to create social media and copy buttons
function createSocialMediaButtons(quote) {
    socialButtonsContainer.innerHTML = ''; // Clear previous buttons

    const shareText = `"${quote.quote}" - ${quote.author}`;

    // Create Copy to Clipboard button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Quote';
    copyButton.classList.add('social-btn');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Quote copied to clipboard!');
        });
    });
    socialButtonsContainer.appendChild(copyButton);

    // Create Share on Twitter button
    const twitterButton = document.createElement('button');
    twitterButton.textContent = 'Share on Twitter';
    twitterButton.classList.add('social-btn');
    twitterButton.addEventListener('click', () => {
        const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(twitterURL, '_blank');
    });
    socialButtonsContainer.appendChild(twitterButton);

    // Create Share on Facebook button
    const facebookButton = document.createElement('button');
    facebookButton.textContent = 'Share on Facebook';
    facebookButton.classList.add('social-btn');
    facebookButton.addEventListener('click', () => {
        const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareText)}`;
        window.open(facebookURL, '_blank');
    });
    socialButtonsContainer.appendChild(facebookButton);
}

// Fetch a quote when the button is clicked
button.addEventListener('click', fetchQuote);

// Fetch a quote when the page loads
fetchQuote();
