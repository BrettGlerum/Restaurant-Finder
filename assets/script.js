 // Function for distance slider to show current set distance. Goes by increments of 2 mi
 var distanceSlider = document.getElementById("distance-slider");
 function showDistance(distanceSlider) {
   document.getElementById("distance-slider-value").innerHTML = distanceSlider + " mi"
 };

 var priceSlider = document.getElementById("price-slider");
// Function for price slider to show current set price level btwn 1-4
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
};

// var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
//   var city = ['Austin'];
