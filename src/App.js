import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Options from './components/Options'
import ByState from './components/ByState'
import LargestDonors from './components/LargestDonors'
import IndividualDonors from './components/IndividualDonors'

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/options" element={<Options />} />
                <Route path="/byState" element={<ByState />} />
                <Route path="/largestDonors" element={<LargestDonors />} />
                <Route
                    path="/individualDonors"
                    element={<IndividualDonors />}
                />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
