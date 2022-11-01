if (document.title === 'Restaurant Finder') {
    
  var submit = document.querySelector('#randomize-btn');
  var geocoder;
  console.log(window.location.href)
  function initialize() {
    geocoder = new google.maps.Geocoder();
  };
  initialize();
  
  function codeAddress(){
    var address = document.getElementById('address').value;
    console.log(address)
    geocoder.geocode ( {'address': address},
     function (results, status){
      if (status == 'OK'){
        localStorage.setItem("search_location", JSON.stringify(results)
        )
      }
      else ('Geocode was not successful for the following reason: ' + status);
      localStorage.setItem("keyword", document.getElementById("Keyword").value);
      localStorage.setItem("distance", document.getElementById("distance-slider").value);
      localStorage.setItem("cost", document.getElementById("price-slider").value );
      window.location.href = "./ResultsPage.html"
    })
  };
  submit.addEventListener("click", codeAddress);
  
  
  };
  
  if (document.title === 'Restaurant Finder Results') {
  var Keyword = localStorage.getItem("keyword")
  var restultsEl = document.querySelectorAll(".result-item");
  var restultsLocationEl = document.querySelectorAll("#result-loc")
  var map;
  var service;
  var infowindow;
  var endLocat = [];
  var cost = localStorage.getItem("cost");
var distance =  1609 * localStorage.getItem("distance");
var locations = JSON.parse(localStorage.getItem("search_location"))[0].geometry.location;

  function initMap() {
    infowindow = new google.maps.InfoWindow();
     map = new google.maps.Map(
          document.getElementById('map'), {center: locations, zoom: 15});
    
      var request = {
        location: locations,
        radius: distance ,
        maxPriceLevel: cost,
        type: 'food',
        keyword: Keyword,
      };
    
      var service = new google.maps.places.PlacesService(map);
    
      service.nearbySearch(request,callback);
    };

function callback(results, status)  {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        localStorage.setItem("results", JSON.stringify(results));
        var Results = JSON.parse(localStorage.getItem("results"));
        let sortedProducts = Results.sort(
            (p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
        console.log(sortedProducts);
        for (var i = 0; i < 3; i++) {
        var marker = new google.maps.Marker(
          {place: {
            placeId: sortedProducts[i].place_id,
            location: sortedProducts[i].geometry.location
          },
          map,
        title: results.title});
        }
        for (let i = 0; i < 3; i++){
          restultsEl[i].textContent = Results[i].name;
          restultsLocationEl[i].textContent = Results[i].vicinity}
        map.setCenter(sortedProducts[0].geometry.location);
      }
  
  };

  function initMap2() {
    var tester = document.getElementById("panel").children[1]
    if(typeof tester !== "undefined"){
      tester.remove()}
    var Results = JSON.parse(localStorage.getItem("results"));
   const map= new google.maps.Map(
        document.getElementById('map'), {center: locations, zoom: 15});
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map,
      panel: document.getElementById("panel"),
    });
  
    directionsRenderer.addListener("directions_changed", () => {
      
      const directions = directionsRenderer.getDirections();
  
      if (directions) {
        computeTotalDistance(directions);
      }
    });
    displayRoute(
      locations,
      endLocat,
      directionsService,
      directionsRenderer
    );
  }
  
  function displayRoute(origin, destination, service, display) {
    service
      .route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      })
      .then((result) => {
        display.setDirections(result);
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }
  
  function computeTotalDistance(result) {
    let total = 0;
    const myroute = result.routes[0];
  
    if (!myroute) {
      return;
    }
  
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value / 1609;
    }
  

    document.getElementById("total").innerHTML = total.toFixed(2) + "Miles";
  };
 var Search = document.querySelector(".results-list");

  Search.addEventListener("click", function(event){
    var element = event.target;
    endLocat = element.innerHTML;
    if(element.matches("button") === true){
        initMap2();
    }
  });

  window.initMap = initMap;

  
  };