import React, { useContext, createContext, useState, ReactNode } from "react";

interface AppStateContextType {
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<AppStateContextType | undefined>(undefined);

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({
  children,
}) => {


  const value: AppStateContextType = {};

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateContextProvider");
  }
  return context;
};
