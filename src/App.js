import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './component/HomePage/viewHome'
import Product from './component/Product'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </>

    )
}

export default App;
