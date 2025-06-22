import { useState } from 'react';
import AdminLogin from '../conponents/AdminLogin';
import ProductManager from '../conponents/ProductManager';

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const handleLogin = (newToken) => {
        setToken(newToken);
        setIsLoggedIn(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Quản Trị - Quang Minh</h1>
            {isLoggedIn ? (
                <ProductManager token={token} />
            ) : (
                <AdminLogin onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Admin;