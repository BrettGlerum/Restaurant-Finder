var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
var city = []

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ad2c9e39amsh2925cb2352495d2p199454jsn339b5dbb49f4',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};
fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/placeholder/city/placeholder/1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));