import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Jobs from './pages/Jobs'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="Jobs" element={<Jobs />} />
                    <Route path="Blank" element={<Blank />} />
                    <Route path="Blank" element={<Blank />} />
                    <Route path="Blank" element={<Blank />} />
                    <Route path="Blank" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
