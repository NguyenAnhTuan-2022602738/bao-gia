import React from 'react';

const PriceTable = ({ items = [], priceType = 'GIA' }) => {
    const formatPrice = (price) => {
        if (!price || price === 'N/A') return 'N/A';

        const numericValue = price.toString()
            .replace(/\s/g, '')
            .replace(/[^0-9]/g, '');

        if (!numericValue || isNaN(numericValue)) return 'N/A';

        return parseInt(numericValue).toLocaleString('vi-VN');
    };

    const columns = [
        { header: 'STT', accessor: 'STT' },
        { header: 'Nhóm hàng', accessor: 'NHOMHANG' },
        { header: 'Tên hàng', accessor: 'TENHANG' },
        { header: 'ĐVT', accessor: 'ĐVT' },
        { header: 'Giá', accessor: priceType }
    ];

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border">
                {/* ... giữ nguyên phần thead ... */}
                <tbody>
                {items.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                        {columns.map((column) => {
                            const accessor = column.accessor.trim();
                            const rawValue = item[accessor] || item[` ${accessor} `];
                            const formattedValue = column.accessor === priceType
                                ? formatPrice(rawValue)
                                : rawValue || 'N/A';

                            return (
                                <td key={`${item._id}-${accessor}`} className="py-2 px-4 border">
                                    {formattedValue}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTable;