import React from 'react';

function FileList({ currentPath, currentFolder, selectedItems, onSelectItem, onDeselectItem, onNavigate }) {
  const handleCheckboxChange = (name, checked) => {
    const fullPath = currentPath.concat(name);
    if (checked) {
      onSelectItem(fullPath);
    } else {
      onDeselectItem(fullPath);
    }
  };

  const handleNavigate = (name) => {
    onNavigate(currentPath.concat(name));
  };

  return (
    <ul id="file-list">
      {Object.entries(currentFolder).map(([name, content]) => (
        <li key={name}>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedItems[currentPath.concat(name).join("/")]}
            onChange={(e) => handleCheckboxChange(name, e.target.checked)}
          />
          <span onClick={() => content && handleNavigate(name)} style={{ cursor: content ? 'pointer' : 'default' }}>
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default FileList;
