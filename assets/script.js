var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
var city = ['Austin']
var restultsEl = document.querySelectorAll(".result-item")
var number1 = Math.floor(Math.random() * 150) + 1;


var names = [];
var hours = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32796552f7mshcf2b63c7bc8a465p11c91fjsn9c1520e45b37',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};
    // fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/' + state[42] + '/city/' + city[0] +'/'+ number1, options)
    //     .then(function (response) {
    //         response.json().then(function (data){
    //             localStorage.setItem("restaurants", JSON.stringify(data))
    //             console.log(data);})
               
    //     }); 
        restaurant_options = JSON.parse(localStorage.getItem("restaurants"));
final_selection = restaurant_options.restaurants
console.log(final_selection)
for (i = 0; i < 3; i++){
    var number2 = Math.floor(Math.random() * 10) + 1;
    restultsEl[i].textContent = final_selection[number2].restaurantName;
    console.log(final_selection[number2].restaurantName)
}


// Functions for sliders to show current value
var priceSlider = document.getElementById("price-slider")

function showPrice(priceSlider) {
    document.getElementById("price-slider-value").innerHTML = "$" + priceSlider
}

var distanceSlider = document.getElementById("distance-slider")

function showDistance(distanceSlider) {
    document.getElementById("distance-slider-value").innerHTML = distanceSlider + " mi"
}
