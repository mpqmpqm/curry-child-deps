import React, { useEffect, useState } from 'react';
import { RegisterProvider, useRegister } from './Register';

const One = () => {
    useRegister('One');
    return <div>One</div>;
};

const Two = () => {
    useRegister('Two');
    return <div>Two</div>;
};

const Three = () => {
    useRegister('Three');
    return <div>Three</div>;
};

const Four = () => {
    useRegister('Four');
    return <div>Four</div>;
};

const Parent = ({ children }) => {
    const [list, s] = useState([]);
    const [c, setC] = useState(0);
    const setList = (...args) => s(args);
    useEffect(() => {
        console.log(list);
    }, [list]);
    return (
        <>
            <button onClick={() => setC(c + 1)}>Click</button>
            <p>{c}</p>
            <RegisterProvider cb={setList}>{children}</RegisterProvider>
        </>
    );
};

function App() {
    return (
        <div className='App'>
            <Parent>
                <One />
                <Two />
                <Three />
                <Four />
            </Parent>
        </div>
    );
}

export default App;
