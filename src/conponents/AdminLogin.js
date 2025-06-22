import { useState } from 'react';
import axios from 'axios';

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/admin/login', {
                username,
                password,
            });
            onLogin(res.data.token);
        } catch (err) {
            setError('Đăng nhập thất bại. Kiểm tra lại thông tin.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Đăng Nhập Admin</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="border p-2 mb-2 w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="border p-2 mb-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;