import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from './components/home/Main.jsx'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='*' element={<Navigate to="/" />} > </Route>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
