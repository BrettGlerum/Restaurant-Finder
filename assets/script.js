var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
var city = ['Austin']
var restultsEl = document.querySelectorAll(".result-item")
var number1 = Math.floor(Math.random() * 150);


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
    var number2 = Math.floor(Math.random() * 10);
    console.log(number2)
    restultsEl[i].textContent = final_selection[number2].restaurantName;
    console.log(final_selection[number2].restaurantName)
}


// Function for price slider. Sets price level btwn 1-4
var priceSlider = document.getElementById("price-slider")

function showPrice(priceSlider) {
    if (priceSlider == 1) {
        document.getElementById("price-slider-value").innerHTML = "$" 
    } else if (priceSlider == 2) {
        document.getElementById("price-slider-value").innerHTML = "$$" 
    } else if (priceSlider == 3) {
        document.getElementById("price-slider-value").innerHTML = "$$$" 
    } else if (priceSlider == 4) {
        document.getElementById("price-slider-value").innerHTML = "$$$$" 
    }
}

// Function for distance slider to set distance btwn 2mi-24mi. Goes by increments of 2
var distanceSlider = document.getElementById("distance-slider")

function showDistance(distanceSlider) {
    document.getElementById("distance-slider-value").innerHTML = distanceSlider + " mi"
}

