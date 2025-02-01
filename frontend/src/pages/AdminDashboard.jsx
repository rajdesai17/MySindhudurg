import React, { useContext } from 'react';
import { Container, Row, Col, Table, Button, Card, CardBody } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import '../styles/adminDashboard.css';
import { FaStar } from 'react-icons/fa';

const AdminDashboard = () => {
   const { user } = useContext(AuthContext);
   const { data: tours } = useFetch('/tours');
   const { data: bookings } = useFetch('/booking');

   // Dummy tours data
   const dummyTours = [
      { _id: '1', title: 'Westminister Bridge', price: 100 },
      { _id: '2', title: 'Bali, Indonesia', price: 400 },
      { _id: '3', title: 'Snowy Mountains', price: 300 },
      { _id: '4', title: 'Great Wall of China', price: 500 },
      { _id: '5', title: 'Eiffel Tower', price: 200 }
   ];

   // Dummy bookings data
   const dummyBookings = [
      { _id: '1', tourName: 'Westminister Bridge', fullName: 'John Doe', bookAt: '2023-10-01', people: 2, location: 'London', price: 100 },
      { _id: '2', tourName: 'Bali, Indonesia', fullName: 'Jane Smith', bookAt: '2023-10-02', people: 4, location: 'Bali', price: 400 },
      { _id: '3', tourName: 'Snowy Mountains', fullName: 'Alice Johnson', bookAt: '2023-10-03', people: 3, location: 'Australia', price: 300 },
      { _id: '4', tourName: 'Great Wall of China', fullName: 'Bob Brown', bookAt: '2023-10-04', people: 5, location: 'China', price: 500 },
      { _id: '5', tourName: 'Eiffel Tower', fullName: 'Charlie Green', bookAt: '2023-10-05', people: 2, location: 'Paris', price: 200 }
   ];

   // Dummy admin information
   const adminInfo = {
      name: 'Admin Name',
      rating: 4.5,
      contact: 'admin@example.com',
      address: '123 Admin St, Admin City, Admin Country'
   };

   return (
      <Container className="admin-dashboard">
         <Row>
            <Col>
               <h2 className="dashboard-title">Admin Dashboard</h2>
               <Card className="admin-info mb-4">
                  <CardBody className="d-flex">
                     <div className="admin-photo">
                        <img src="https://via.placeholder.com/150" alt="Admin" />
                     </div>
                     <div className="admin-details ms-3">
                        <h5 className="admin-info-title">{adminInfo.name}</h5>
                        <p className="admin-info-item"><strong>Contact:</strong> {adminInfo.contact}</p>
                        <p className="admin-info-item"><strong>Address:</strong> {adminInfo.address}</p>
                        <div className="admin-rating">
                           <FaStar color="gold" /> {adminInfo.rating}
                        </div>
                        <Button color="warning" size="sm" className="mt-2">Edit</Button>
                     </div>
                  </CardBody>
               </Card>
               <Card className="admin-controls mb-4">
                  <CardBody>
                     <h3>Tours Management</h3>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                           {dummyTours.map(tour => (
                              <tr key={tour._id}>
                                 <td>{tour.title}</td>
                                 <td>${tour.price}</td>
                                 <td>
                                    <Button color="warning" size="sm" className="me-2">Edit</Button>
                                    <Button color="danger" size="sm">Delete</Button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  </CardBody>
               </Card>
               <Card className="admin-controls">
                  <CardBody>
                     <h3>Bookings</h3>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Tour</th>
                              <th>Guest</th>
                              <th>Date</th>
                              <th>People</th>
                              <th>Location</th>
                              <th>Price</th>
                           </tr>
                        </thead>
                        <tbody>
                           {dummyBookings.map(booking => (
                              <tr key={booking._id}>
                                 <td>{booking.tourName}</td>
                                 <td>{booking.fullName}</td>
                                 <td>{new Date(booking.bookAt).toLocaleDateString()}</td>
                                 <td>{booking.people}</td>
                                 <td>{booking.location}</td>
                                 <td>${booking.price}</td>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </Container>
   );
};

export default AdminDashboard;