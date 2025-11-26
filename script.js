// Función para mapear valores
function mapValue(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

Protobject.Core.onReceived((data) => {
  const lat = mapValue(data.y, 0, 1, map.getBounds().getNorth(), map.getBounds().getSouth());
  const lng = mapValue(data.x, 0, 1, map.getBounds().getWest(), map.getBounds().getEast());

  console.log("Latitud:", lat, "Longitud:", lng);
  document.getElementById("InfoBox").innerText = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
  console.log(data);
  console.log(lat, lng)
});

