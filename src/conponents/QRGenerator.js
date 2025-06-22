import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Thay đổi cách import

const QRGenerator = ({ priceType }) => {
    const url = `${window.location.origin}/price/${priceType.toLowerCase()}`;

    return (
        <div className="flex flex-col items-center p-4">
            <h3 className="mb-2 font-medium">{getPriceTypeLabel(priceType)}</h3>
            <QRCodeSVG // Sử dụng QRCodeSVG thay vì QRCode
                value={url}
                size={128}
                level="H"
                includeMargin={true}
            />
            <p className="mt-2 text-sm text-gray-600">Quét để xem giá {getPriceTypeLabel(priceType)}</p>
        </div>
    );
};

// Hàm helper để hiển thị tên loại giá
const getPriceTypeLabel = (type) => {
    switch(type) {
        case 'BBCL': return 'Bình thường CL';
        case 'BBPT': return 'Bình thường PT';
        case 'BLVIP': return 'VIP';
        case 'BL': return 'Bình thường';
        default: return 'Giá';
    }
};

export default QRGenerator;