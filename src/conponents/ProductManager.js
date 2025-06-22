import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductManager({ token }) {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        stt: '',
        group: '',
        name: '',
        unit: '',
        prices: { BBCl: '', BBPT: '', BLVIP: '', BL: '' },
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/admin/products', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/admin/products', form, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
            setForm({
                stt: '',
                group: '',
                name: '',
                unit: '',
                prices: { BBCl: '', BBPT: '', BLVIP: '', BL: '' },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (stt) => {
        try {
            await axios.delete(`http://localhost:3000/api/admin/products/${stt}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Quản Lý Sản Phẩm</h2>
            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    type="number"
                    placeholder="  className="border p-2 m-2 w-1/>"
                value={form.stt}
                onChange={(e) => setForm({ ...form, stt: e.target.value })}
                required
                /{'>'}
                <input
                    type="text"
                    placeholder="Nhóm Hàng"
                    className="border p-2 m-2 w-1/4"
                    value={form.group}
                    onChange={(e) => setForm({ ...form, group: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Tên Hàng"
                    className="border p-2 m-2 w-1/4"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="ĐVT"
                    className="border p-2 m-2 w-1/4"
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Giá BBCl"
                    className="border p-2 m-2 w-1/4"
                    value={form.prices.BBCl}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            prices: { ...form.prices, BBCl: e.target.value },
                        })
                    }
                    required
                />
                <input
                    type="number"
                    placeholder="Giá BBPT"
                    className="border p-2 m-2 w-1/4"
                    value={form.prices.BBPT}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            prices: { ...form.prices, BBPT: e.target.value },
                        })
                    }
                    required
                />
                <input
                    type="number"
                    placeholder="Giá BLVIP"
                    className="border p-2 m-2 w-1/4"
                    value={form.prices.BLVIP}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            prices: { ...form.prices, BLVIP: e.target.value },
                        })
                    }
                    required
                />
                <input
                    type="number"
                    placeholder="Giá BL"
                    className="border p-2 m-2 w-1/4"
                    value={form.prices.BL}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            prices: { ...form.prices, BL: e.target.value },
                        })
                    }
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">
                    Thêm Sản Phẩm
                </button>
            </form>
            <table className="w-full border-collapse border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">STT</th>
                    <th className="border p-2">Nhóm Hàng</th>
                    <th className="border p-2">Tên Hàng</th>
                    <th className="border p-2">ĐVT</th>
                    <th className="border p-2">Giá BBCl</th>
                    <th className="border p-2">Giá BBPT</th>
                    <th className="border p-2">Giá BLVIP</th>
                    <th className="border p-2">Giá BL</th>
                    <th className="border p-2">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.stt}>
                        <td className="border p-2">{product.stt}</td>
                        <td className="border p-2">{product.group}</td>
                        <td className="border p-2">{product.name}</td>
                        <td className="border p-2">{product.unit}</td>
                        <td className="border p-2">{product.prices.BBCl.toLocaleString('vi-VN')}</td>
                        <td className="border p-2">{product.prices.BBPT.toLocaleString('vi-VN')}</td>
                        <td className="border p-2">{product.prices.BLVIP.toLocaleString('vi-VN')}</td>
                        <td className="border p-2">{product.prices.BL.toLocaleString('vi-VN')}</td>
                        <td className="border p-2">
                            <button
                                className="bg-red-500 text-white p-1 rounded"
                                onClick={() => handleDelete(product.stt)}
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductManager;