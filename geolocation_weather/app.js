function weather() {
  var location = document.getElementById("location");
  var apiKey = 'abe71913a28699a97d22a409a971e807';
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success,error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    location.innerHTML = 'Latitude is ' +
  latitude + 'º <br> Longitude is ' +
  longitude + 'º';

    $.getJSON(curl + apiKey + "/" + latitude + "," +
  longitude + "?callback=?", function(data) {
    $('#temp').html(data.currently.temperature + 'º F');
    $('#minutely').html(data.currently.minutely.summary);
  });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
  location.innerHTML = "Locating...";
}

weather();

//
// function weather() {
//
//   var location = document.getElementById("location");
//   var apiKey = 'f536d4c3330c0a1391370d1443cee848'; // PLEASE SIGN UP FOR YOUR OWN API KEY
//   var url = 'https://api.forecast.io/forecast/';
//
//   navigator.geolocation.getCurrentPosition(success, error);
//
//   function success(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//
//     location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';
//
//      $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
//       $('#temp').html(data.currently.temperature + '° F');
//       $('#minutely').html(data.minutely.summary);
//     });
//   }
//
//   function error() {
//     location.innerHTML = "Unable to retrieve your location";
//   }
//
//   location.innerHTML = "Locating...";
// }
//
// weather();
