//better approach than 08minicoontext 

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // variables 
    darkTheme: () => {}, // method
    lightTheme: () => {}, // method 
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}