import React, { useState } from 'react';
import { ArrowLeft, Bed, Bath, Maximize, DollarSign, Star } from 'lucide-react';
import { Tower, Floor, Apartment } from '../types';

interface ApartmentLayoutsProps {
  tower: Tower;
  floor: Floor;
  apartments: Apartment[];
  onSelectApartment: (apartment: Apartment) => void;
  onBack: () => void;
}

export const ApartmentLayouts: React.FC<ApartmentLayoutsProps> = ({
  tower,
  floor,
  apartments,
  onSelectApartment,
  onBack
}) => {
  const [hoveredApartment, setHoveredApartment] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 relative">
      {/* Dark overlay when hovering - for the bonus effect */}
      {hoveredApartment && (
        <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity duration-300 z-10 pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Floors</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {tower.name} - {floor.name}
          </h1>
          <p className="text-xl text-gray-600">
            Available apartment layouts
          </p>
        </div>

        {/* Apartments Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              onMouseEnter={() => setHoveredApartment(apartment.id)}
              onMouseLeave={() => setHoveredApartment(null)}
              onClick={() => onSelectApartment(apartment)}
              className={`group relative bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ${
                hoveredApartment === apartment.id 
                  ? 'transform scale-105 shadow-2xl z-30' 
                  : hoveredApartment 
                    ? 'opacity-75' 
                    : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {apartment.type}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {apartment.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {apartment.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-500">Premium</span>
                  </div>
                </div>

                {/* Apartment Details */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{apartment.bedrooms}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{apartment.bathrooms}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Maximize className="w-4 h-4" />
                      <span className="text-sm">{apartment.area}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{apartment.areaUnit}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-xl font-bold text-gray-900">
                      {apartment.price.toLocaleString()}
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};