// components/Loading.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-t-2 border-b-2',
    lg: 'w-16 h-16 border-t-4 border-b-4'
  };
  
  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white',
    primary: 'border-primary-500'
  };

  return (
    <motion.div 
      className="flex items-center justify-center py-8"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ 
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8
      }}
    >
      <div className={`rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}></div>
    </motion.div>
  );
};

export const LoadingDots = () => (
  <div className="flex items-center justify-center py-8 space-x-2">
    {[...Array(3)].map((_, i) => (
      <motion.div 
        key={i} 
        className="w-3 h-3 bg-blue-500 rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          delay: i * 0.15
        }}
      />
    ))}
  </div>
);

export const LoadingBar = ({ width = 'full', height = 'h-1' }) => (
  <div className={`${width} ${height} bg-gray-200 rounded overflow-hidden`}>
    <motion.div 
      className="h-full bg-blue-500"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  </div>
);

export const LoadingContent = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <motion.div 
        key={i} 
        className={`h-4 bg-gray-200 rounded ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);