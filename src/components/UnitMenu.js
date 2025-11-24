import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const UnitMenu = ({ currentUnit, onUnitChange }) => {
  const units = [
    { id: 1, title: 'Unidad 1' },
    { id: 2, title: 'Unidad 2' },
    { id: 3, title: 'Unidad 3' },
    { id: 4, title: 'Unidad 4' },
    { id: 5, title: 'Unidad 5' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <Menu className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-medium text-gray-800">Navega por Unidades</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {units.map((unit) => (
          <motion.button
            key={unit.id}
            onClick={() => onUnitChange(unit.id)}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm ${
              currentUnit === unit.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {unit.title}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default UnitMenu;