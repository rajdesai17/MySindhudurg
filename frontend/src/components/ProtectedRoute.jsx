import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
   const { user } = useContext(AuthContext)
   
   console.log("Protected Route - User:", user)
   console.log("Protected Route - User Role:", user?.role)

   if (!user || user.role !== 'admin') {
      return <Navigate to="/login" />
   }

   return children
}

export default ProtectedRoute 