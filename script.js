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

const getPhotos = (query) => {
    let url = 'https://api.pexels.com/v1/search?query=' + query + "&per_page=15&page=1";
    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
        })
}