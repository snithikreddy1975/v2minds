import React from 'react';

function SelectedItems({ selectedItems, onDeleteSelectedItem }) {
  const handleDelete = (item) => {
    onDeleteSelectedItem(item.split("/"));
  };

  return (
    <ul id="selected-list">
      {Object.keys(selectedItems).map((item) => (
        <li key={item}>
          {item}
          <button onClick={() => handleDelete(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default SelectedItems;
