import React from 'react';
import { ArrowLeft, Home, Building2, Layers } from 'lucide-react';
import { Tower, Floor } from '../types';

interface FloorViewProps {
  tower: Tower;
  floors: Floor[];
  onSelectFloor: (floor: Floor) => void;
  onBack: () => void;
}

export const FloorView: React.FC<FloorViewProps> = ({ 
  tower, 
  floors, 
  onSelectFloor, 
  onBack 
}) => {
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
            <span>Back to Towers</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {tower.name} - Find Your Perfect Floor
          </h1>
          <p className="text-xl text-gray-600">
            Each floor offers unique views and apartment layouts. Take your time to explore!
          </p>
        </div>

        {/* Floors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {floors
            .sort((a, b) => b.floorNumber - a.floorNumber) // Highest floor first
            .map((floor) => (
            <div
              key={floor.id}
              onClick={() => onSelectFloor(floor)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-6"
            >
              {/* Floor Number */}
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tower.color} text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {floor.floorNumber}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {floor.name}
                </h3>
                
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                  <Home className="w-4 h-4" />
                  <span>{floor.apartmentCount} {floor.apartmentCount === 1 ? 'unit' : 'units'} available</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Tower Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                About {tower.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {tower.description}
              </p>
            </div>
            <div className="flex items-center space-x-8 text-center">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-600">
                  {tower.totalFloors}
                  </span>
                </div>
                <div className="text-sm text-gray-500">Total Floors</div>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-3xl font-bold text-emerald-600">
                  {floors.reduce((sum, floor) => sum + floor.apartmentCount, 0)}
                  </span>
                </div>
                <div className="text-sm text-gray-500">Total Units</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};