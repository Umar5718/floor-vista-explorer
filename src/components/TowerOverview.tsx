import React from 'react';
import { Building, Building2, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Tower } from '../types';

interface TowerOverviewProps {
  towers: Tower[];
  onSelectTower: (tower: Tower) => void;
}

export const TowerOverview: React.FC<TowerOverviewProps> = ({ towers, onSelectTower }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'building-2':
        return Building2;
      default:
        return Building;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dream Home
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our stunning residential towers and find the perfect place to call home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {towers.map((tower) => {
            const IconComponent = getIcon(tower.icon);
            return (
              <div
                key={tower.id}
                onClick={() => onSelectTower(tower)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tower.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${tower.color} text-white shadow-lg`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {tower.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tower.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>{tower.totalFloors} Floors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Luxury Units</span>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Explore available units →
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};