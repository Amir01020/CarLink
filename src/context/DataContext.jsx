import React, { createContext, useContext } from 'react';

// Создаем контекст
const DataContext = createContext();

// Компонент-провайдер, который предоставляет данные
export function DataProvider({ children, data }) {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

// Хук для использования контекста
export function useData() {
  return useContext(DataContext);
}