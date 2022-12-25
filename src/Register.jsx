import React, { useContext, useEffect, useRef } from 'react';

const Context = React.createContext();

const r = (f, n, ...acc) => {
    if (n === 1) return (...args) => f(...acc, ...args);
    return (...args) => r(f, n - 1, ...acc, ...args);
};

export const useRegister = (value) => {
    const { f } = useContext(Context);
    useEffect(() => {
        if (f.current) f.current = f.current(value);
    }, []);
};

export const RegisterProvider = ({ cb, children }) => {
    const a = r(cb, React.Children.count(children));
    const f = useRef(a);
    return <Context.Provider value={{ f }}>{children}</Context.Provider>;
};
