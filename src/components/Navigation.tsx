import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Tower, Floor } from '../types';

interface NavigationProps {
  currentView: string;
  selectedTower: Tower | null;
  selectedFloor: Floor | null;
  onNavigate: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  selectedTower,
  selectedFloor,
  onNavigate
}) => {
  const breadcrumbs = [
    { label: 'Towers', view: 'towers', active: currentView === 'towers' }
  ];

  if (selectedTower) {
    breadcrumbs.push({
      label: selectedTower.name,
      view: 'floors',
      active: currentView === 'floors'
    });
  }

  if (selectedFloor) {
    breadcrumbs.push({
      label: selectedFloor.name,
      view: 'apartments',
      active: currentView === 'apartments'
    });
  }

  if (currentView === 'detail') {
    breadcrumbs.push({
      label: 'Details',
      view: 'detail',
      active: true
    });
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-sm">
          <Home className="w-4 h-4 text-gray-400" />
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.view}>
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              <button
                onClick={() => onNavigate(item.view)}
                className={`px-2 py-1 rounded transition-colors ${
                  item.active
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};