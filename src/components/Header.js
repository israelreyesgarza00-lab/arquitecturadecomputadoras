import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="bg-white border-b border-gray-200 py-6 px-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <LayoutDashboard className="w-8 h-8 text-gray-600" />
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Arquitectura de Computadoras</h1>
          <p className="text-gray-500">Proyecto Escolar - Explora las 5 Unidades Clave</p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;