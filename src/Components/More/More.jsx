import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    img,
    location,
    additionalInformation: { overview, climate, localCuisine },
    placesToVisit,
    reviews,
  } = placeInfo;

  return (
    <div className='moreContainer'>
      <img className='moreImg' src={img} alt={`Image for ${location}`} />
      <h1 className='locationH'>{location}</h1>
      <p>{overview}</p>
      <p>Climate: {climate}</p>
      <p>Local Cuisine: {localCuisine}</p>
        
      <h1 className='locationH'>Places to Visit:</h1>
        <ul>
          {placesToVisit.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      <h1 className='locationH'>Reviews:</h1>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
    </div>
  );
};

export default More;

