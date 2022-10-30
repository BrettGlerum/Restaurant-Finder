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
      
      localStorage.setItem("distance", document.getElementById("distance-slider").value);
      localStorage.setItem("cost", document.getElementById("price-slider").value );
      window.location.href = "./ResultsPage.html"
    })
  };
  submit.addEventListener("click", codeAddress);
  
  
  };
  
  if (document.title === 'Restaurant Finder Results') {
    
  var restultsEl = document.querySelectorAll(".result-item");
  var map;
  var service;
  var infowindow;

  function initMap() {
    var cost = localStorage.getItem("cost");
    var distance =  1609 * localStorage.getItem("distance");
    var locations = JSON.parse(localStorage.getItem("search_location"))[0].geometry.location;
      infowindow = new google.maps.InfoWindow();
    
     map = new google.maps.Map(
          document.getElementById('map'), {center: locations, zoom: 15});
    
      var request = {
        location: locations,
        radius: distance ,
        maxPriceLevel: cost,
        type: 'food',
        keyword: 'Chinese',
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
        for (var i = 0; i < Results.length; i++) {
        var marker = new google.maps.Marker(
          {place: {
            placeId: results[i].place_id,
            location: results[i].geometry.location
          },
          map,
        title: results.title});
        }
        for (let i = 0; i < 3; i++){
          restultsEl[i].textContent = Results[i].name;
        }
        map.setCenter(results[0].geometry.location);
      }
  
  };
  window.initMap = initMap;
  };