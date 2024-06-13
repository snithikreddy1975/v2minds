import React, { useState } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import FileList from './components/FileList';
import SelectedItems from './components/SelectedItems';
import './App.css';

const initialFileSystem = {
  "root": {
    "folder1": {
      "subfolder1": {
        "file1.txt": null,
        "file2.txt": null
      },
      "file3.txt": null
    },
    "folder2": {
      "file4.txt": null
    },
    "file5.txt": null
  }
};

function App() {
  const [currentPath, setCurrentPath] = useState(["root"]);
  const [selectedItems, setSelectedItems] = useState({});

  const getFolder = (path, fileSystem) => {
    return path.reduce((folder, part) => folder[part], fileSystem);
  };

  const handleNavigate = (path) => {
    setCurrentPath(path);
  };

  const handleSelectItem = (path) => {
    setSelectedItems((prev) => ({ ...prev, [path.join("/")]: true }));
  };

  const handleDeselectItem = (path) => {
    setSelectedItems((prev) => {
      const newSelectedItems = { ...prev };
      delete newSelectedItems[path.join("/")];
      return newSelectedItems;
    });
  };

  const handleDeleteSelectedItem = (path) => {
    setSelectedItems((prev) => {
      const newSelectedItems = { ...prev };
      delete newSelectedItems[path.join("/")];
      return newSelectedItems;
    });
  };

  const currentFolder = getFolder(currentPath, initialFileSystem);

  return (
    <div className="container">
      <div id="division1" className="division">
        <h2>File Explorer</h2>
        <Breadcrumbs currentPath={currentPath} onNavigate={handleNavigate} />
        <FileList
          currentPath={currentPath}
          currentFolder={currentFolder}
          selectedItems={selectedItems}
          onSelectItem={handleSelectItem}
          onDeselectItem={handleDeselectItem}
          onNavigate={handleNavigate}
        />
      </div>
      <div id="division2" className="division">
        <h2>Selected Items</h2>
        <SelectedItems
          selectedItems={selectedItems}
          onDeleteSelectedItem={handleDeleteSelectedItem}
        />
      </div>
    </div>
  );
}

export default App;
