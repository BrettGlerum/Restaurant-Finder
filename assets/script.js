final_selection = [];


const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ad2c9e39amsh2925cb2352495d2p199454jsn339b5dbb49f4',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/' + state + '/city/' + city +'/'+ number +', options')
        .then(function (response) {
            response.json().then(function (data){
                localStorage.setItem("restaurants", JSON.stringify(data));
               restaurant_options = JSON.parse(localStorage.getItem("restaurants"));
               final_selection = restaurant_options.restaurants
                console.log(final_selection)
            })
        })