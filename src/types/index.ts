// Type definitions for the Real Estate Floor Selector application
export interface Tower {
  id: string;
  name: string;
  description: string;
  totalFloors: number;
  icon: string;
  color: string;
}

export interface Floor {
  id: string;
  towerId: string;
  floorNumber: number;
  name: string;
  apartmentCount: number;
}

export interface Apartment {
  id: string;
  floorId: string;
  name: string;
  type: string;
  area: number;
  areaUnit: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  features: string[];
}

export interface AppState {
  currentView: 'towers' | 'floors' | 'apartments' | 'detail';
  selectedTower: Tower | null;
  selectedFloor: Floor | null;
  selectedApartment: Apartment | null;
}