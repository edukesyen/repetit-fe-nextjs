'use client';

import { useState, createContext, useContext } from 'react';

const addTopicModalContext = createContext(null);

export function AddTopicModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((state) => !state);
  };

  return (
    <addTopicModalContext.Provider value={{ isOpen: isOpen, toggleModal: toggleModal }}>
      {children}
    </addTopicModalContext.Provider>
  );
}

export function useAddTopicModalContext() {
  return useContext(addTopicModalContext);
}
