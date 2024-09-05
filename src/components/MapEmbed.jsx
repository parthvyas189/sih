import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function Map({ lat, lng, shipData }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with your actual Google Maps API key
      version: 'weekly',
    });

    loader.load().then(() => {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 8,
      });
      setMap(googleMap);

      // Create a custom marker for the ship
      const marker = new window.google.maps.Marker({
        position: { lat: shipData.latitude, lng: shipData.longitude },
        map: googleMap,
        title: shipData.ShipName,
        icon: {
          url: 'src/Assets/Ship_Icon.png', // Your custom icon
          scaledSize: new window.google.maps.Size(50, 50),
        },
      });

      // Add click event to show info window
      marker.addListener('click', () => {
        setSelectedMarker({
          position: { lat: shipData.latitude, lng: shipData.longitude },
          info: shipData,
        });
      });
    }).catch(e => {
      console.error('Error loading Google Maps API:', e);
    });
  }, [lat, lng, shipData]);

  return (
    <div className="relative">
      <div ref={mapRef} style={{ height: '500px', width: '100%' }} />

      {/* Tailwind CSS InfoWindow - Displayed when a marker is clicked */}
      {selectedMarker && (
        <div className="absolute top-16 left-16 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
          <h3 className="text-xl font-semibold mb-2">{selectedMarker.info.ShipName}</h3>
          <p className="text-sm"><strong>Position:</strong> {selectedMarker.info.latitude}, {selectedMarker.info.longitude}</p>
          <p className="text-sm"><strong>Speed (SOG):</strong> {selectedMarker.info.PositionReport.Sog} knots</p>
          <p className="text-sm"><strong>Heading:</strong> {selectedMarker.info.PositionReport.TrueHeading}°</p>
          <p className="text-sm"><strong>Rate of Turn:</strong> {selectedMarker.info.PositionReport.RateOfTurn}</p>
          <p className="text-sm"><strong>Navigational Status:</strong> {selectedMarker.info.PositionReport.NavigationalStatus}</p>
        </div>
      )}
    </div>
  );
}

export default Map;
