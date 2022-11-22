import React, { createContext, useState } from "react";

export const Context =createContext()

export const ThemeContext = createContext({})

function ThemeProvider(props) {
    const [theme, setTheme] = useState("light")
    const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")
    return (
        <ThemeContext.Provider value={{ theme,changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider