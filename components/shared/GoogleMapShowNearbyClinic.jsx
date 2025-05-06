"use client";

import {
  Circle,
  GoogleMap,
  Marker,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function GoogleMapShowNearbyClinic({
  clinics,
  selectedClinic,
  onClinicSelect,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: ["places", "geometry"],
  });

  const mapRef = useRef(null);
  const [highlightedClinic, setHighlightedClinic] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Default to Florida center if no clinic is selected
  const defaultCenter = { lat: 27.994402, lng: -81.760254 };

  const mapStyles = [
    {
      featureType: "all",
      elementType: "all",
      // stylers: [{ saturation: -100 }, { gamma: 0.8 }],
    },
  ];

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Handle clinic selection
  const handleClinicClick = (clinic) => {
    setHighlightedClinic(clinic);
    if (onClinicSelect) {
      onClinicSelect(clinic);
    }
    if (mapRef.current) {
      mapRef.current.panTo({
        lat: clinic.latitude,
        lng: clinic.longitude,
      });
    }
  };

  // Center map when selectedClinic changes
  useEffect(() => {
    if (mapRef.current && selectedClinic) {
      mapRef.current.panTo({
        lat: selectedClinic.latitude,
        lng: selectedClinic.longitude,
      });
      setHighlightedClinic(selectedClinic);
    }
  }, [selectedClinic]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="overflow-hidden transition-opacity duration-700 opacity-100">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
        center={
          selectedClinic
            ? { lat: selectedClinic.latitude, lng: selectedClinic.longitude }
            : { lat: 28.0072616, lng: -82.1227991 }
        }
        zoom={selectedClinic ? 14 : 10}
        onLoad={(map) => {
          mapRef.current = map;
        }}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: "greedy",
          clickableIcons: false,
          backgroundColor: "#f9fafb",
        }}
      >
        {/* Show user location if available */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: "white",
            }}
          />
        )}

        {/* Highlight selected clinic */}
        {highlightedClinic && (
          <Circle
            center={{
              lat: highlightedClinic.latitude,
              lng: highlightedClinic.longitude,
            }}
            radius={500}
            options={{
              strokeColor: "#4F46E5",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#4F46E5",
              fillOpacity: 0.35,
            }}
          />
        )}

        {/* Render all clinics */}
        {clinics.map((clinic) => {
          const isSelected = highlightedClinic?.id === clinic.id;
          const isNearby =
            userLocation &&
            getDistance(
              clinic.latitude,
              clinic.longitude,
              userLocation.lat,
              userLocation.lng
            ) < 10; // Within 10km is considered nearby

          return (
            <OverlayView
              key={clinic.id}
              position={{ lat: clinic.latitude, lng: clinic.longitude }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="relative w-16 h-16">
                <div
                  className={clsx(
                    "rounded-full p-1 flex items-center justify-center shadow-lg border-4 transition-all duration-300 transform overflow-hidden cursor-pointer",
                    {
                      "border-[#5E20FE] bg-blue-100 scale-110 z-50": isSelected,
                      "border-purple-500 bg-purple-100":
                        isNearby && !isSelected,
                      "border-gray-300 bg-white": !isSelected && !isNearby,
                    }
                  )}
                  onClick={() => handleClinicClick(clinic)}
                >
                  <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {clinic.title.charAt(0)}
                  </div>
                </div>
                {isSelected && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded shadow-lg z-50 min-w-[200px]">
                    <h3 className="font-bold">{clinic.title}</h3>
                    <p className="text-sm">{clinic.address}</p>
                    <p className="text-sm">{clinic.phone}</p>
                  </div>
                )}
              </div>
            </OverlayView>
          );
        })}
      </GoogleMap>
    </div>
  );
}
