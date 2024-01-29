import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const More = () => {
  const { id } = useParams();
  const [placeInfo, setPlaceInfo] = useState(null);

  useEffect(() => {
    const fetchPlaceInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/more/${id}`);
        const data = await response.json();
        
        setPlaceInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaceInfo();
  }, [id]);

  if (!placeInfo) {
    return <p>Loading...</p>;
  }

  const {
    location,
    img,
    price,
    description,
    rating,
    additionalInformation: { overview, climate, localCuisine },
    placesToVisit,
    reviews,
  } = placeInfo;

  return (
    <div className='moreContainer'>
      <h1>{location}</h1>
      <img src={img} alt={`Image for ${location}`} />
      <p>{overview}</p>
      <p>Climate: {climate}</p>
      <p>Local Cuisine: {localCuisine}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <div className="rating">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <h2>Places to Visit:</h2>
      <ul>
        {placesToVisit.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default More;

