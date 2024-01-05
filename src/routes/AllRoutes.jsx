import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'

const AllRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/home' element={<HomePage />} />
      <Route path='/details/:name' element={<DetailsPage />} />
      <Route path='/' element={<Navigate to='/home' />} />
    </Routes>
  )
}

export default AllRoutes