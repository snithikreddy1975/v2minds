import React from 'react';

function Breadcrumbs({ currentPath, onNavigate }) {
  const handleClick = (index) => {
    onNavigate(currentPath.slice(0, index + 1));
  };

  return (
    <div id="breadcrumbs">
      {currentPath.map((part, index) => (
        <span key={index} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
          {part} / 
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
