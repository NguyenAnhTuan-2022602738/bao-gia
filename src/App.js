import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import PriceTableView from './conponents/PriceTableView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                {/* Thêm route mới cho trang hiển thị giá theo loại */}
                <Route path="/price/:type" element={<PriceTableView />} />
            </Routes>
        </Router>
    );
}

export default App;