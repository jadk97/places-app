import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Burj Khalifa",
    description: "The tallest building in the world.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg",
    address: "1 Sheikh Mohammed bin Rashid Boulevard, Dubai, United Arab Emirates",
    location: {
      lat: 25.1972,
      lng: 55.2744
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Burj Khalifa",
    description: "The tallest building in the world.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg",
    address: "1 Sheikh Mohammed bin Rashid Boulevard, Dubai, United Arab Emirates",
    location: {
      lat: 25.1972,
      lng: 55.2744
    },
    creator: "u2"
  }
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return (
    <PlaceList items={loadedPlaces} />
  );
}

export default UserPlaces;