// providerArticulos.js
import React, { createContext, useState } from 'react';

export const ArticulosContext = createContext();

export const ArticulosProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    return (
        <ArticulosContext.Provider value={{ items, setItems }}>
            {children}
        </ArticulosContext.Provider>
    );
};
