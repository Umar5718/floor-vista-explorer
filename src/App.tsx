import  { useState } from 'react';
import { Navigation } from './components/Navigation';
import { TowerOverview } from './components/TowerOverview';
import { FloorView } from './components/FloorView';
import { ApartmentLayouts } from './components/ApartmentLayouts';
import { DetailedLayoutView } from './components/DetailedLayoutView';
import { towers, floors, apartments } from './data/mockData';
import { AppState, Tower, Floor, Apartment } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentView: 'towers',
    selectedTower: null,
    selectedFloor: null,
    selectedApartment: null
  });

  // Navigation handlers
  const handleSelectTower = (tower: Tower) => {
    setAppState({
      ...appState,
      currentView: 'floors',
      selectedTower: tower,
      selectedFloor: null,
      selectedApartment: null
    });
  };

  const handleSelectFloor = (floor: Floor) => {
    setAppState({
      ...appState,
      currentView: 'apartments',
      selectedFloor: floor,
      selectedApartment: null
    });
  };

  const handleSelectApartment = (apartment: Apartment) => {
    setAppState({
      ...appState,
      currentView: 'detail',
      selectedApartment: apartment
    });
  };

  const handleNavigate = (view: string) => {
    switch (view) {
      case 'towers':
        setAppState({
          currentView: 'towers',
          selectedTower: null,
          selectedFloor: null,
          selectedApartment: null
        });
        break;
      case 'floors':
        if (appState.selectedTower) {
          setAppState({
            ...appState,
            currentView: 'floors',
            selectedFloor: null,
            selectedApartment: null
          });
        }
        break;
      case 'apartments':
        if (appState.selectedFloor) {
          setAppState({
            ...appState,
            currentView: 'apartments',
            selectedApartment: null
          });
        }
        break;
    }
  };

  // Get filtered data based on selections
  const getFloorsForTower = (towerId: string) => 
    floors.filter(floor => floor.towerId === towerId);

  const getApartmentsForFloor = (floorId: string) => 
    apartments.filter(apartment => apartment.floorId === floorId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - shown for all views except tower overview */}
      {appState.currentView !== 'towers' && (
        <Navigation
          currentView={appState.currentView}
          selectedTower={appState.selectedTower}
          selectedFloor={appState.selectedFloor}
          onNavigate={handleNavigate}
        />
      )}

      {/* Main Content */}
      {appState.currentView === 'towers' && (
        <TowerOverview
          towers={towers}
          onSelectTower={handleSelectTower}
        />
      )}

      {appState.currentView === 'floors' && appState.selectedTower && (
        <FloorView
          tower={appState.selectedTower}
          floors={getFloorsForTower(appState.selectedTower.id)}
          onSelectFloor={handleSelectFloor}
          onBack={() => handleNavigate('towers')}
        />
      )}

      {appState.currentView === 'apartments' && appState.selectedTower && appState.selectedFloor && (
        <ApartmentLayouts
          tower={appState.selectedTower}
          floor={appState.selectedFloor}
          apartments={getApartmentsForFloor(appState.selectedFloor.id)}
          onSelectApartment={handleSelectApartment}
          onBack={() => handleNavigate('floors')}
        />
      )}

      {appState.currentView === 'detail' && 
       appState.selectedTower && 
       appState.selectedFloor && 
       appState.selectedApartment && (
        <DetailedLayoutView
          tower={appState.selectedTower}
          floor={appState.selectedFloor}
          apartment={appState.selectedApartment}
          onBack={() => handleNavigate('apartments')}
        />
      )}
    </div>
  );
}

export default App;