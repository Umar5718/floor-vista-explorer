import React, { useState } from 'react';
import { ArrowLeft, Bed, Bath, Maximize, DollarSign, MapPin, Star, Check, Heart, Share2, Calendar, Phone } from 'lucide-react';
import { Tower, Floor, Apartment } from '../types';

const fallbackImage = 'https://via.placeholder.com/800x400?text=Apartment+Image';

interface DetailedLayoutViewProps {
  tower: Tower;
  floor: Floor;
  apartment: Apartment;
  onBack: () => void;
}

export const DetailedLayoutView: React.FC<DetailedLayoutViewProps> = ({
  tower,
  floor,
  apartment,
  onBack
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Apartments</span>
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleFavorite}
              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : ''}`} />
            </button>
            <button
              onClick={() => {
                // Add share functionality here
              }}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={apartment.image}
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage; }}
                alt={apartment.name}
                className="w-full h-96 object-cover bg-gray-200"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                  {apartment.name}
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="bg-white bg-opacity-90 px-4 py-2 rounded-full font-medium text-gray-900">
                  {apartment.type}
                </span>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Location Details</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Tower:</span>
                  <span className="font-medium">{tower.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Floor:</span>
                  <span className="font-medium">{floor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit:</span>
                  <span className="font-medium">{apartment.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {apartment.name} - {apartment.type}
              </h1>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">Featured Unit</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${apartment.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bed className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {apartment.bedrooms}
                  </div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bath className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {apartment.bathrooms}
                  </div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Maximize className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {apartment.area}
                  </div>
                  <div className="text-sm text-gray-500">{apartment.areaUnit}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Features & Amenities</h3>
              <div className="grid grid-cols-1 gap-3">
                {apartment.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Viewing</span>
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl hover:bg-gray-200 transition-colors font-medium text-lg flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};