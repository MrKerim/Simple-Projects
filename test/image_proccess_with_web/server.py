from flask import Flask, request, send_file
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def index():
    return open('index.html', 'r').read()

@app.route('/script.js')
def script():
    return open('script.js', 'r').read()

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return 'No image uploaded', 400

    image = request.files['image']
    image_data = plt.imread(image)
    reversed_image_data = np.flipud(image_data)

    # Save reversed image to file
    reversed_image_file = BytesIO()
    plt.imsave(reversed_image_file, reversed_image_data, format='png')
    reversed_image_file.seek(0)

    # Return the reversed image file
    return send_file(reversed_image_file, mimetype='image/png')

if __name__ == '__main__':
    print('Starting server...')
    app.run(debug=True)
