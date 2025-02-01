import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'

const FeaturedTourList = () => {
   const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)

   // Dummy featured tours data
   const dummyFeaturedTours = [
      { _id: '1', title: 'Westminister Bridge', city: 'London', photo: 'https://via.placeholder.com/300', price: 100, featured: true, reviews: [] },
      { _id: '2', title: 'Bali, Indonesia', city: 'Bali', photo: 'https://via.placeholder.com/300', price: 400, featured: true, reviews: [] },
      { _id: '3', title: 'Snowy Mountains', city: 'Australia', photo: 'https://via.placeholder.com/300', price: 300, featured: true, reviews: [] },
      { _id: '4', title: 'Great Wall of China', city: 'China', photo: 'https://via.placeholder.com/300', price: 500, featured: true, reviews: [] }
   ]

   return (
      <>
         {loading && <h4>Loading.....</h4>}
         {error && <h4>{error}</h4>}
         {
            !loading && !error &&
            dummyFeaturedTours.map(tour => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedTourList