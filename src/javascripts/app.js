import $ from 'jquery';

import 'slick-carousel';

$('.slick').slick({
  dots: false,
  arrows: false,
});


$('.js-location-check').on('click', (e) => {
  e.preventDefault();

  navigator.geolocation.getCurrentPosition(function(position) {
    const maxLat = 51.539193;
    const minLat = 51.537625;
    const maxLng = -0.209752;
    const minLng = -0.212005;

    if(
      position.coords.latitude < maxLat &&
      position.coords.latitude > minLat &&
      position.coords.longitude < maxLng &&
      position.coords.longitude > minLng
    ) {
      alert('correct! redirecting you to treasure hunt!');
      window.location.replace("/location.html");
    } else {
      alert('wrong location! try again!');
    }
  });
});
