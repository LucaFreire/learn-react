import React, { useState } from "react";

export const CounterContext = React.createContext();
CounterContext.displayName = 'Counter';

export const CounterProvider = ({ children }) => {
    const [num, setNum] = useState(0);

    function addOne() {
        setNum(num + 1);
    }

    function subOne() {
        setNum(num - 1);
    }

    return (
        <CounterContext.Provider
            value={{
                num,
                subOne,
                addOne
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}