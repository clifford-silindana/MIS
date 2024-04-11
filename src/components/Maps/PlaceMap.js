import { GoogleMap, useLoadScript, Marker,Polyline  } from "@react-google-maps/api";
import { useState } from "react";
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const PlaceMap = () => {
  const [origin, setorigin] = useState({ lat: -26.003610, lng: 28.208260 });
  const [destination, setdestination] = useState({ lat: -26.008560, lng: 28.222300});
  const fetchDirections = async () => {
    try {
      // const origin = '-26.003610,28.208260'; // Coordinates of origin
      // const destination = '-26.008560,28.222300'; // Coordinates of destination
  


      const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_DIRECTIONS_API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.routes.length) {
        const route = data.routes[0];
        const { coordinates } = route.overview_polyline;
        setCoordinates(decodePolyline(coordinates));
      } else {
        setError('No routes found');
      }
    } catch (error) {
      setError('Error fetching directions');
      console.error(error);
    }
  };

  const decodePolyline = (encoded) => {
    const points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA5x_4mPnEnGydlR0KJDlHTet3d1rxEDyo",
    libraries: ["places"],
  });
  
  const [center, setCenter] = useState({ lat: -34.397, lng: 150.644 });

  const handleAddressSelect = (latitude, longitude, address) => {
    setCenter({ lat: latitude, lng: longitude });
    getLatLong(latitude, longitude, address);
  };



  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={origin}
      >
         <Polyline coordinates={origin} strokeWidth={4} strokeColor="blue" />
        <Marker position={origin} />
        <Marker 
        position={destination} 
        />
      </GoogleMap>

      
    </div>
  );
};

export default PlaceMap;
