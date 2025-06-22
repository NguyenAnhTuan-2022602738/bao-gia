import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PriceTable from './PriceTable';

const PriceTableView = () => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items');
                setItems(response.data.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getPriceTypeLabel = () => {
        switch(type) {
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