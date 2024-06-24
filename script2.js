const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer qYdIgQsWqyugd6KlpI2tgrobegyc1wWI9FdhgYv26SXeZpxizSzzMt42', // Fixed 'Bearer ' prefix for Authorization header
    }
};

document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let searchInput = document.getElementById("searchInput");
    let value = searchInput.value.trim(); // Trim the input value
    if (value !== "") {
        getPhotos(value);
    } else {
        alert("input valid prompt");
    }
});

let imageContainer = document.getElementById("imageContainer");

const getPhotos = (query) => {
    let url = 'https://api.pexels.com/v1/search?query=' + encodeURIComponent(query) + "&per_page=15&page=1"; // Encode query string
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            imageContainer.innerHTML = ''; // Clear previous images
            data.photos.forEach(photo => {
                let imageWrapper = document.createElement('div'); // Create a div to wrap each image
                imageWrapper.classList.add('image-wrapper'); // Optional: Add a class for styling
                let image = document.createElement('img');
                image.src = photo.src.original;
                image.alt = photo.url; // Set alt attribute for accessibility
                image.width = 500;
                image.height = 300;
                imageWrapper.appendChild(image);
                imageContainer.appendChild(imageWrapper); // Append the image wrapper to the container
            });
        })
        .catch(err => {
            console.error('Fetch error:', err);
        });
};