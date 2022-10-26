var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
var city = [];
var final_selection = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '13f2487b8amsh5738b35d7cb5e02p1304a9jsnb71d336b3673',
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
