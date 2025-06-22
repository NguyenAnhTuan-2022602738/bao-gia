const TierSelector = ({ tier, onTierChange }) => {
    const tiers = [
        { value: 'GIA', label: 'Giá chung' },
        { value: 'BBCL', label: 'Bình thường CL' },
        { value: 'BBPT', label: 'Bình thường PT' },
        { value: 'BLVIP', label: 'VIP' },
        { value: 'BL', label: 'Bình thường' }
    ];

    return (
        <div className="flex flex-wrap gap-2 my-4">
            {tiers.map((t) => (
                <button
                    key={t.value}
                    onClick={() => onTierChange(t.value)}
                    className={`px-4 py-2 rounded ${tier === t.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
};

export default TierSelector;