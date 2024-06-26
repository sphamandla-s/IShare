'use client';

import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '82vh',
  borderRadius: '15px 0px 0px 15px',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function GoogleMaps() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  process.env.NEXT_PUBLIC_GOOGLE_MAP_API!
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    // Center the map on the initial coordinates without fitBounds
    map.setCenter(center);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading map</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Example Marker */}
      <Marker position={center} />

      {/* Add more markers here if needed */}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}
