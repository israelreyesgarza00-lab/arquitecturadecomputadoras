import React from 'react';
import { motion } from 'framer-motion';
import UnitSection from './UnitSection';

const UnitsContainer = ({ activeUnit }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {Array.from({ length: 5 }, (_, index) => (
        <UnitSection 
          key={index + 1} 
          unitId={index + 1} 
          isActive={activeUnit === index + 1} 
        />
      ))}
    </div>
  );
};

export default UnitsContainer;