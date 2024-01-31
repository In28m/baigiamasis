import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PiStarThin } from "react-icons/pi";

const More = () => {
  const { id } = useParams()
  const [placeInfo, setPlaceInfo] = useState(null)
  const [newReview, setNewReview] = useState('')

  useEffect(() => {
    const fetchPlaceInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/more/${id}`)
        const data = await response.json()
        setPlaceInfo(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPlaceInfo()
  }, [id])

  const handleAddReview = () => {
    const updatedReviews = [...placeInfo.reviews, newReview]
    setPlaceInfo({ ...placeInfo, reviews: updatedReviews })
    setNewReview('')
  }

  if (!placeInfo) {
    return <p>Loading...</p>
  }

  const { img, location, additionalInformation: { overview, climate, localCuisine }, placesToVisit, reviews } = placeInfo

  return (
    <div className='moreContainer'>
      <div className="contentWrapper">
        <div className="textContent">
          <h1 className='locationH1'>{location}</h1>
          <p>{overview}</p>
          <p>Climate: {climate}</p>
          <p>Local Cuisine: {localCuisine}</p>
        </div>

        <div className="imageContent">
          <img className='moreImg' src={img} alt={`Image for ${location}`} />
        </div>
      </div>

      <div className="sectionContainer">
        <div className='contentSection'>
          <h3>Places to Visit:</h3>
          <ul>
            {placesToVisit.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>

        <div className='contentSection'>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
            
            <div className="starRating">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <PiStarThin
                  key={starIndex}
                  className={starIndex < Math.floor(placeInfo.rating) ? 'starFilled' : 'starEmpty'}
                />
              ))}
              <span>{placeInfo.rating}</span>
            </div>
          </ul>
        </div>

        <div className='contentSection'>
          <h3>Add Your Review:</h3>
          <div className="parentContainer">
            <textarea
              className="textarea"
              placeholder="Your review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
          </div>
          <button className="addReviewBtn" onClick={handleAddReview}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default More
