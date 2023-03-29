import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Empoyee from './pages/Empoyee';
import { fetchAllEmployees  } from './features/employeeReducer';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllEmployees())
  }, [dispatch])
  return (
    <Router>
      <Routes>
        <Route element={<Empoyee />} path="/" />
      </Routes>
    </Router>
  )
}

export default App;
