function myFunction() {
  var x = document.getElementById("menu_list");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 48.8583424, lng: 2.3375084 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}