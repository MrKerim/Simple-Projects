const image = document.getElementById('image');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const asciiArt = document.getElementById('ascii-art');

// Function to convert an image to ASCII art
function convertImageToASCII(image, asciiArt) {
    const asciiChars = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];

    // Set canvas dimensions to match image
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    let result = '';
    for (let y = 0; y < canvas.height; y += 6) { // adjust 6 to match character height
        for (let x = 0; x < canvas.width; x += 6) { // adjust 6 to match character width
            const imageData = ctx.getImageData(x, y, 1, 1);
            const brightness = (imageData.data[0] + imageData.data[1] + imageData.data[2]) / 3 / 255;
            const asciiIndex = Math.floor(brightness * (asciiChars.length - 1));
            result += asciiChars[asciiIndex];
        }
        result += '\n'; // newline after each row
    }
    asciiArt.textContent = result;
}

// Call the function when the image is loaded
image.onload = function() {
    convertImageToASCII(image, asciiArt);
};

