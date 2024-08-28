'use client';

import { useState, createContext, useContext } from 'react';

const addMaterialModalContext = createContext(null);

export function AddMaterialModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((state) => !state);
  };

  return (
    <addMaterialModalContext.Provider value={{ isOpen: isOpen, toggleModal: toggleModal }}>
      {children}
    </addMaterialModalContext.Provider>
  );
}

export function useAddMaterialModalContext() {
  return useContext(addMaterialModalContext);
}
