import React from 'react';
import { Outlet } from 'react-router-dom';

const CategoryPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Outlet />
    </div>
  );
};

export default CategoryPage;
