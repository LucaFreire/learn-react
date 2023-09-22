import React, { useState } from "react";

export const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    function toggleDark() {
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider
            value={{ isDark, toggleDark }}
        >
            {children}
        </ThemeContext.Provider>
    );
};