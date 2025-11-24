import React, { useState } from 'react';
import Header from './components/Header';
import UnitMenu from './components/UnitMenu';
import UnitsContainer from './components/UnitsContainer';

const App = () => {
  const [activeUnit, setActiveUnit] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Header />
        
        <UnitMenu 
          currentUnit={activeUnit} 
          onUnitChange={setActiveUnit} 
        />
        
        <UnitsContainer activeUnit={activeUnit} />
        
        <footer className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-200">
          <p>Proyecto desarrollado para Arquitectura de Computadoras © 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default App;