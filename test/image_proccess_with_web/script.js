function processImage() {
    var fileInput = document.getElementById('imageInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('image', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        var imageUrl = URL.createObjectURL(blob);
        document.getElementById('processedImage').src = imageUrl;
        document.getElementById('processedImage').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}
