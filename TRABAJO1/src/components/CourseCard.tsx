import React from 'react';

interface CourseCardProps {
    title: string;
    price: string;
    category: string;
    image: string;
    onContract: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
    title,
    price,
    category,
    image,
    onContract
}) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[400px] md:h-[300px] hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10" />
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 z-20 text-white">
                <p className="text-sm text-cyan-300 font-medium mb-1">{category}</p>
                <h3 className="text-base font-semibold mb-3 leading-tight">{title}</h3>
                <button
                    onClick={onContract}
                    className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium transform transition-all hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                    {price}
                </button>
            </div>
        </div>
    );
}

export default CourseCard;