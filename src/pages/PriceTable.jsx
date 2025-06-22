import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PriceTable from './PriceTable';

const PriceTableView = () => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sample data for testing
    const sampleData = [
        {
            _id: '1',
            STT: 1,
            NHOMHANG: 'Lốp xe',
            TENHANG: 'Lốp xe máy 100/80-14',
            ĐVT: 'Cái',
            BBCL: 450000,
            BBPT: 420000,
            BLVIP: 400000,
            BL: 430000,
        },
        {
            _id: '2',
            STT: 2,
            NHOMHANG: 'Phụ kiện cao su',
            TENHANG: 'Gioăng cao su 50mm',
            ĐVT: 'Cái',
            BBCL: 15000,
            BBPT: 14000,
            BLVIP: 12000,
            BL: 13000,
        },
        {
            _id: '3',
            STT: 3,
            NHOMHANG: 'Băng tải',
            TENHANG: 'Băng tải cao su 500mm',
            ĐVT: 'Mét',
            BBCL: 200000,
            BBPT: 190000,
            BLVIP: 180000,
            BL: 195000,
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/items');
                setItems(response.data.data || sampleData); // Fallback to sampleData if API fails
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setItems(sampleData); // Use sample data on error
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getPriceTypeLabel = () => {
        switch (type) {
            case 'bbcl': return 'Bình thường CL';
            case 'bbpt': return 'Bình thường PT';
            case 'blvip': return 'VIP';
            case 'bl': return 'Bình thường';
            default: return 'Giá chung';
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Đang tải...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                BÁO GIÁ ĐỒ CAO SU - QUANG MINH ({getPriceTypeLabel()})
            </h1>
            <PriceTable items={items} priceType={type.toUpperCase()} />
        </div>
    );
};

export default PriceTableView;