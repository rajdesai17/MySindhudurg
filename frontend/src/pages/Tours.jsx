import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Tours = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)

   const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
   const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

   // Dummy tours data
   const dummyTours = [
      { _id: '1', title: 'Westminister Bridge', city: 'London', photo: 'https://via.placeholder.com/300', price: 100, featured: true, reviews: [] },
      { _id: '2', title: 'Bali, Indonesia', city: 'Bali', photo: 'https://via.placeholder.com/300', price: 400, featured: true, reviews: [] },
      { _id: '3', title: 'Snowy Mountains', city: 'Australia', photo: 'https://via.placeholder.com/300', price: 300, featured: true, reviews: [] },
      { _id: '4', title: 'Great Wall of China', city: 'China', photo: 'https://via.placeholder.com/300', price: 500, featured: true, reviews: [] },
      { _id: '5', title: 'Eiffel Tower', city: 'Paris', photo: 'https://via.placeholder.com/300', price: 200, featured: false, reviews: [] },
      { _id: '6', title: 'Statue of Liberty', city: 'New York', photo: 'https://via.placeholder.com/300', price: 150, featured: false, reviews: [] },
      { _id: '7', title: 'Taj Mahal', city: 'India', photo: 'https://via.placeholder.com/300', price: 250, featured: false, reviews: [] },
      { _id: '8', title: 'Sydney Opera House', city: 'Australia', photo: 'https://via.placeholder.com/300', price: 350, featured: false, reviews: [] }
   ]

   useEffect(() => {
      const pages = Math.ceil(tourCount / 8)
      setPageCount(pages)
      window.scrollTo(0, 0)
   }, [page, tourCount, tours])

   return (
      <>
         <CommonSection title={"All Tours"} />
         <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        dummyTours.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}> <TourCard tour={tour} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default Tours