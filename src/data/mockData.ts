import { Tower, Floor, Apartment } from '../types';

// Mock data for towers
export const towers: Tower[] = [
  {
    id: 'tower-a',
    name: 'Tower A',
    description: 'Luxury residential tower with premium amenities and stunning city views',
    totalFloors: 15,
    icon: 'building',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'tower-b',
    name: 'Tower B',
    description: 'Modern living spaces designed for comfort and convenience',
    totalFloors: 12,
    icon: 'building-2',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'tower-c',
    name: 'Tower C',
    description: 'Contemporary architecture with eco-friendly features',
    totalFloors: 18,
    icon: 'building',
    color: 'from-amber-500 to-amber-600'
  }
];

// Generate floors for each tower
export const floors: Floor[] = towers.flatMap(tower => 
  Array.from({ length: tower.totalFloors }, (_, index) => ({
    id: `${tower.id}-floor-${index + 1}`,
    towerId: tower.id,
    floorNumber: index + 1,
    name: `Floor ${index + 1}`,
    apartmentCount: Math.floor(Math.random() * 3) + 2 // 2-4 apartments per floor
  }))
);

// Mock apartment data
const apartmentTypes = ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', 'Penthouse'];
const features = [
  'Balcony', 'City View', 'Garden View', 'Premium Finishes', 'Walk-in Closet', 
  'En-suite Bathroom', 'Modern Kitchen', 'Hardwood Floors', 'High Ceilings', 'Natural Light'
];

// Generate apartments for each floor
export const apartments: Apartment[] = floors.flatMap(floor => 
  Array.from({ length: floor.apartmentCount }, (_, index) => {
    const type = apartmentTypes[Math.floor(Math.random() * apartmentTypes.length)];
    const bedrooms = type === 'Studio' ? 0 : type === 'Penthouse' ? 3 : parseInt(type.charAt(0)) || 1;
    const bathrooms = bedrooms === 0 ? 1 : Math.max(1, bedrooms - 1);
    const area = 400 + (bedrooms * 300) + Math.floor(Math.random() * 200);
    
    return {
      id: `${floor.id}-apt-${index + 1}`,
      floorId: floor.id,
      name: `Apartment ${String.fromCharCode(65 + index)}`,
      type,
      area,
      areaUnit: 'sq ft',
      bedrooms,
      bathrooms,
      price: Math.floor((area * (2 + Math.random() * 3)) / 100) * 100,
      image: `https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800`,
      features: features.sort(() => 0.5 - Math.random()).slice(0, 3 + Math.floor(Math.random() * 3))
    };
  })
);