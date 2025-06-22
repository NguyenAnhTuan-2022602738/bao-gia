import QRGenerator from '../conponents/QRGenerator';

function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">BÁO GIÁ ĐỒ CAO SU - QUANG MINH</h1>

            {/* Khu vực hiển thị QR codes */}
            <div className="flex flex-wrap justify-around mb-8 p-4 bg-gray-50 rounded-lg">
                <QRGenerator priceType="BBCL" />
                <QRGenerator priceType="BBPT" />
                <QRGenerator priceType="BLVIP" />
                <QRGenerator priceType="BL" />
            </div>
            <div className="text-center">
                <p>Quét QR code tương ứng để xem báo giá</p>
            </div>
        </div>
    );
}

export default Home;