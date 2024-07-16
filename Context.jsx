import { createContext, useState } from "react";

export const ImageContext = createContext(null);

export default function ContextProvider({ children, imageSize }) {
  return (
    <ImageContext.Provider value={{ imageSize }}>
      {children}
    </ImageContext.Provider>
  );
}
