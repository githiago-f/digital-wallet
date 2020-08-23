import React from 'react';
import { Routes } from 'app/routes';
import BaseTheme from 'components/StyleBase';
import { Cards } from 'components/Cards';

function App() {
    return (
        <>
            <BaseTheme />
            <Routes />
            <Cards title="titulo" subtitle="subtitle"></Cards>
        </>
    );
}

export default App;
