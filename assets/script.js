const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ad2c9e39amsh2925cb2352495d2p199454jsn339b5dbb49f4',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/' + state +'/city/' + city +'/10, options')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));