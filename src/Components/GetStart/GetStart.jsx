import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";


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
    const filteredData = allPlaces.filter(place => place.location === category)
    setFilteredPlaces(filteredData)
  }

  const fetchPlaces = async () => {
    try {
      const response = await fetch('http://localhost:4000/places')
      console.log('HTTP Response:', response)
      const data = await response.json()
      setAllPlaces(data)
      setFilteredPlaces(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    fetchPlaces()
  }, [])

  useEffect(() => {
    console.log('Selected Category:', selectedCategory)
  }, [selectedCategory])

  return (
    <div className="main">
      <div className="item-container">
        <span className="item-label">Your Travel</span>
          <select className='category' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="location">location:</option>
            {allPlaces.map(place => (
              <option key={place.id} value={place.location}>{place.location}</option>
            ))}
          </select>
      </div>

      <div className="cards-container">
        {filteredPlaces.map(place => (
          <div key={place.id} className="card">
            <img src={place.img} alt={`Image for ${place.location}`} className="card-image" />
              <div className="card-content">
                <p className="card-location"><IoLocationSharp /> {place.location}</p>
                <p className="card-price">{place.price}</p>
                <p className="card-description">{place.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetStart










