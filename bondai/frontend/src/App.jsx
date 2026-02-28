import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Relationships from './pages/Relationships'
import RelationshipProfile from './pages/RelationshipProfile'
import Alerts from './pages/Alerts'
import Insights from './pages/Insights'
import Reminders from './pages/Reminders'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/relationships" element={<Relationships />} />
                <Route path="/relationships/:id" element={<RelationshipProfile />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/reminders" element={<Reminders />} />
            </Routes>
        </Router>
    )
}
