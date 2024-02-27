fetch('text.txt')
    .then(response => response.text()) // Get the response as text
    .then(text => {
        // Set the content of the <div> with id="content" to the text content
        let contentDiv = document.getElementById('content');
        contentDiv.innerText = text;
        // Change font size to 20px (you can adjust the size as needed)
        contentDiv.style.fontSize = '8px';
		contentDiv.style.fontFamily = 'Courier, monospace';
        // Set letter-spacing and word-spacing to ensure consistent spacing
        contentDiv.style.letterSpacing = 'normal';
        contentDiv.style.wordSpacing = 'normal';
    })
    .catch(error => {
        console.error('Error:', error);
    });