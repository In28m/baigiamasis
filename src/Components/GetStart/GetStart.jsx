import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCheckDouble } from 'react-icons/fa6';
import { PiStarThin } from 'react-icons/pi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const GetStart = () => {
  const [selectedCategory, setSelectedCategory] = useState('location')
  const [allPlaces, setAllPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
    filterPlacesByCategory(category)
  }

  const filterPlacesByCategory = (category) => {
    const filteredData = allPlaces.filter((place) => place.location === category)
    setFilteredPlaces(filteredData)
  }

  const fetchPlaces = async () => {
    try {
      const response = await fetch('http://localhost:3000/places')
      const data = await response.json()

      const placesWithRating = data.map((place) => ({
        ...place,
        rating: Math.floor(Math.random() * 5) + 1,
      }))

      setAllPlaces(placesWithRating)
      setFilteredPlaces(placesWithRating)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPlaces()
  }, [])

  return (
    <div className="main">
      <div className="item-container">
        <span className="item-label">Your Travel</span>
        <select className="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="location">Location:</option>
          {allPlaces.map((place) => (
            <option key={place.id} value={place.location}>
              {place.location}
            </option>
          ))}
        </select>
        <button className="btn">
          <Link to="/booking">
            Booking <FaCheckDouble className="icon" />
          </Link>
        </button>
      </div>

      <div className="cards-container">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="card">
            <img src={place.img} alt={`Image for ${place.location}`} className="card-image" />
            <div className="card-content">
              <p className="card-location">
                <IoLocationSharp /> {place.location}
              </p>
              <p className="card-price">{place.price}</p>
              <p className="card-description">{place.description}</p>
              <div className="card-rating">
                {Array.from({ length: place.rating }, (_, index) => (
                  <PiStarThin key={index} />
                ))}
              </div>
              <Link to={`/more/${place.id}`} className="more-btn">
                <span className="btn-text">{place.showMore ? 'Less' : 'More'}</span>
                <BsArrowRightCircle className="arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetStart
