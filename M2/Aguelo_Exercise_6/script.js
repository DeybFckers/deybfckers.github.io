document.getElementById('fetchVerseBtn').addEventListener('click', function() {
    const book = document.getElementById('book').value.trim();
    const chapter = document.getElementById('chapter').value.trim();
    const verse = document.getElementById('verse').value.trim();

    if (!book || !chapter || !verse) {
        alert('Please fill in all fields.');
        return;
    }

    const url = `https://bible-api.com/${book}+${chapter}:${verse}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Verse not found.');
            }
            return response.json();
        })
        .then(data => {
            const verseText = data.text || 'Verse text not available.';
            document.getElementById('verseText').textContent = `"${verseText}"`;
        })
        .catch(error => {
            document.getElementById('verseText').textContent = error.message;
        });
});
