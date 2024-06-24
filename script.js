const options = {
    method: 'GET',
    headers: {
        'Authorization': 'qYdIgQsWqyugd6KlpI2tgrobegyc1wWI9FdhgYv26SXeZpxizSzzMt42',
    }
};

document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault()
    let searchInput = document.getElementById("searchInput")
    let value = searchInput.value;
    getPhotos(value)

})

let imageContainer = document.getElementById("imageContainer")
const getPhotos = (query) => {
    let url = 'https://api.pexels.com/v1/search?query=' + query + "&per_page=15&page=1";
    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            imageContainer.innerHTML = '';
            response.photos.forEach(photo => {
                let image = document.createElement('img')
                image.src = photo.src.original;
                image.width = 500;
                image.height = 300;
                imageContainer.appendChild(image);
            });
        })
        .catch(err => {
            console.log(err);
        })
}